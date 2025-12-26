# Pair Code

A small, friendly README for a pair-programming demo.  
Paired with: **virus**

## Description
This repository contains short example snippets used during pair programming sessions. The snippets are annotated to show roles (Driver / Navigator) and include a simple runnable example.

## How to use
1. Pick a language from the examples below.
2. One person acts as the Driver (typing), the other as the Navigator (reviewing / suggesting).
3. Run the snippet locally.

## Example — Python (Driver: virus)
```python
# Driver: virus
# Navigator: <your partner>
def greet(name: str) -> str:
    """Return a greeting for the given name."""
    return f"Hello, {name}! 👋"

if __name__ == "__main__":
    print(greet("virus"))
```

Run:
- python3 greet.py

## Example — JavaScript (Driver: virus)
```javascript
// Driver: virus
// Navigator: <your partner>
function greet(name) {
  return `Hello, ${name}! 👋`;
}

console.log(greet("virus"));
```

Run:
- node greet.js

## Contributing
- Keep changes small and focused when pairing.
- Use clear comments like `Driver: <name>` and `Navigator: <name>` to indicate roles.
- Push a short summary of what you worked on in each commit message.

## License
MIT — feel free to reuse and adapt for your own pair sessions.

## Author
virus