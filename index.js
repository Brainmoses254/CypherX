const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');

const PREFIX = '!';
const OWNER_NUMBER = '123456789@c.us'; // replace with your number in WhatsApp format (if needed)

const client = new Client({
  authStrategy: new LocalAuth({ clientId: 'bot' }),
  puppeteer: { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] }
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
  console.log('QR RECEIVED: Scan the above QR code with your phone (or check the terminal QR).');
});

client.on('ready', () => {
  console.log('WhatsApp client is ready!');
});

client.on('auth_failure', (msg) => {
  console.error('AUTH FAILURE:', msg);
});

client.on('disconnected', (reason) => {
  console.log('Client disconnected:', reason);
});

// Basic command handler
client.on('message', async msg => {
  try {
    const from = msg.from;
    const body = msg.body || '';
    // ignore non-command messages
    if (!body.startsWith(PREFIX)) return;

    const args = body.slice(PREFIX.length).trim().split(/\s+/);
    const command = args.shift().toLowerCase();

    console.log(`Command "${command}" from ${from} — args:`, args);

    if (command === 'ping') {
      await msg.reply('PONG 🏓');
      return;
    }

    if (command === 'echo') {
      const text = args.join(' ');
      if (!text) return msg.reply('Usage: !echo <text>');
      await msg.reply(text);
      return;
    }

    if (command === 'sticker') {
      // convert an incoming media message to a sticker
      if (msg.hasMedia) {
        const media = await msg.downloadMedia();
        await client.sendMessage(from, media, { sendMediaAsSticker: true });
      } else {
        await msg.reply('Send an image or GIF with the command to convert it to a sticker. Example: reply to image with `!sticker`');
      }
      return;
    }

    if (command === 'eval') {
      // owner-only JS eval (dangerous — keep owner secure)
      if (from !== OWNER_NUMBER) return msg.reply('Not authorized.');
      const code = args.join(' ');
      try {
        // eslint-disable-next-line no-eval
        let result = eval(code);
        if (result instanceof Promise) result = await result;
        await msg.reply(String(result));
      } catch (e) {
        await msg.reply('Error: ' + e.message);
      }
      return;
    }

    // unknown command
    await msg.reply(`Unknown command: ${command}\nUse !help for available commands.`);
  } catch (err) {
    console.error('Message handler error:', err);
  }
});

client.initialize();