# Known issues:

1. AnimatedImage within Hero component uses scroll range from 0 to 0.2. Adding more components shifts it.
   - try to adjust ranges dynamically (based on the component position relative to viewport)
   - use relative scroll position
