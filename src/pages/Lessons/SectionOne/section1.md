## MUI Component Basics

There are three steps that we need to think about in a generalized way for using any component in the  library.

1. The first step is going to be importing that component
2. Rendering that component and then changing the functionality of that component with different props
3. Customizing that component to making it look and feel exactly like we want for our app

### Adding Material UI

1. Install material UI in the application. Paste the following code in the terminal:
 `npm install @mui/material @emotion/react @emotion/styled`

## Importing UI Component

There are two ways of importing a MUI component

1. Named Imports

`import { Button } from "@mui/material";`

This is a *named import*. We are importing from the primary index file of the entire library.

• Convenience: It's cleaner when we need five different components, like: { Button, TextField, Checkbox }
• Performance: Historically this could lead to slower "cold starts" during development becauise the tool had to parse a
much larger file. However, mnodern build tools, like Vite, are usually smart enough to handle this through "Tree Shaking"

2. Default Imports (The "Direct Path" approach)

`import Button from "@mui/material/Button"`

This is a *default import*. We are pointing our code directly to the specific file where the Button lives.

• Performance: This is the "gold standard" for build speed. The compiler doesn't have to look through the main index.
It goes straight to the source
• Reliability: It ensures we are only pulling in exactly what we need, which can slightly reduce bundle sizes in environments
with older build configurations

### And which one should we use?

The short answer is that it depends on the build tool

• If we are using Vite or modern next.js version, we should stick with the named imports.
• If we notice slow ocmpilete time or working in older environment where the production bundle feels bloated, switch to
direct path imports.

We also need to make sure we don't mix both styles in the same file for the same library, it makes the code messy and
occasionally confuse certain linting rules

## Button

Like any react component, we customize its functionality with props. Some props examples are

• variant
• disableElevation: Used to hide the button's drop shadow

And props that every component has: 

**component prop**: Prop that allows us to compose multiple components together, allowing us to change the rendered root element.

If we inspect that element we can see that it is being rendered as `button` tag, but if we want to change that and we want
to apply some functionality from something else. Like for example, we want it actually to be a `Link`. Then we could say
that component equals to link `component="a"`. Now, by inspecting it, we see that now it is an anchor tag.

**SX**: This is the system prop, and we use it to apply one off styles.

So whenever we just need to add a quick style to one certain element we would use this prop.

For example, if we want to change the background-color of this button to green, we would use a syntax similar to inline style
`sx={{ bgcolor: 'green' }}`

**children**: Every UI component has is the children prop, children is actually something from react itself. It represents
whatever goes inside the opening and closing tag of an element. But just for
illustration we would use this example

Utilize MUI's `Component`. Create a constant:

```ts
    <Box>
      label: {props.label}
      {props.children}
    </Box>
```

This means that, whatever we render inside this constant, is going to have a label and then it will just render whatever
else we put inside the `Box`.

MySpecialBox is now an element, and we can call it like

```ts
    <MySpecialBox label="Special Box">
      <Button variant="contained">My Box</Button>
    </MySpecialBox>
```






