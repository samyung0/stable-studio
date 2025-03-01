## SpecStory

## Fixing Tailwind CSS Unknown Color Error (22/11/2024, 07:59:53)

_**User**_

For the code present, we get this error:
```
"flatviolet": Unknown word.
```
How can I resolve this? If you propose a fix, please make it concise.

---

_**Assistant**_

The error occurs because `flatviolet` isn't a defined Tailwind color. You'll need to either use a built-in Tailwind color or define `flatviolet` in your Tailwind configuration.

Here's the fix, showing just the relevant part:

```astro:src/components/astro/AnimatedDivider/AnimatedDivider.astro
// ... existing code ...
	<span
		style="padding-bottom:5px;"
		class="animatedDividerColoredSVG text-violet-500">
		<ArrowBothShort />
	</span>
// ... existing code ...
```

I replaced `text-flatviolet` with `text-violet-500`, which is a built-in Tailwind color. If you need a specific violet shade, you can adjust the number (500) to any value between 50-900.

Alternatively, if you need the exact `flatviolet` color, you can add it to your Tailwind config file.

---



---

