## Why MUI

MUI is extremely comprehensive, all in one package that provides us with everything we need to develop stunning and complex
applications. It is build specifically and only for react, meaning it can take advantage of react features, such as hooks
to provide to us more robust solutions than other libraries that are not tailored for react.

The most basic building block of MUI is the component library, which is a collection of pre-built components for most of
the common web elements like headers, buttons, sliders, switches, and more. And we can then, use these like little puzzle
pieces to put together our application without having to start completely from scratch. MUI then provides a powerful styling
solution to completely customize these components to fit our design preferences.

The theming system centralizes our most commonly used styles into one convenient location, accessible from any where in the
project.

Then there's the grid system, which provides a simple mechanism for creating consistent layouts and arranging our components
on the screen.

Finally, the responsive design solution gives us a flexible way to adapt our styles and layouts to any screen size.

As we could see, MUI gives us everything we need to build entire applications from scratch all on our own.

## MUI ecosystem.

There are multiple React component libraries, like

. Material UI
. Tailwind
. Semantic UI
. Chakra UI
...

### What is a component library

• A Collection of react components, like buttons, sliders, text fields, alerts, spinners, and more.
• Use as a foundation to build with, instead of starting everything from scratch.
• Component libraries is not just about components. Ideally, it should be a toolkit containing all of the solutions for
the most tasks and problems faced when working with a large number of components. It is not just the large suite of components,
but also the robust system of tools it provides along with the components. 

### MUI Brand

It now encompasses multiple component libraries like

• Material UI,
• Joy UI
• Base UI
• MUI X
• MUI Systems

Each of these individual packages provides specific value in different use cases, the family tree is like

`Base UI` being the top one, which takes all of the most fundamental components from material UI and stripes them down to
their most basic implementation and styles. Not having extra styles is key, and is primarily what distinguishes base UI
from the other component libraries. Making `Base UI` components very easy to build on top of, and provide all its own
custom styles.

Then, they creating the `MUI` system, which is a collection of CSS utilities that can be used with `Base UI`, `Material UI`,
`Joy UI`, and even third party components. This system contains tools to allow us to quickly add styles and customizations
while keeping everything consistent and integrated.

`MUI` system is one of hte many examples of this tightly integrated ecosystem that Mui is developing. Giving us everything
we need for our components in one place without having to string together multiple packages on our own.

### Material UI + Joy UI

They can be thought of themselves as siblings, both built on top of the `Base UI`. `Base UI` provides all the structure
and functionality, and then `Material UI` and `Joy UI` each gives us a different. more refined, and opinionated flavor of
design.

• `Material UI`: adheres to Google's Material Design specification, which is a design system providing standards and
principles for creating user interfaces. If we like the style of material design, which resemble the Google family of
products, then this is the library for us.

This is because `Material UI` strictly adheres  to the Material Design specification. However, it is limited to only produce
components and styles that fall under that umbrella. Sometimes, though, we may not want to style those guidelines and may
opt for a different visual style, That is where `Joy UI` comes in

• `Joy UI`: Joy UI is roughly the same set of components as `Material UI`. Eventually, it will be 1 to 1, and it is also
built on top of the foundational `Base UI` components. However, it's an implementation of Mui`s own custom design rather
than the Material Design spec. Allowing more flexibility, creativity and unique visual aesthetic.

• Visual Differences: We could see on the example, that Material UI has a more flatter design, while Joy UI has a little
bit more of details/colors/personality to it.

If our project doesn't need to follow the Material Design spec, then we might consider using Joy 

### MUI X

The final node of our UI family tree is Mui X. Mui X is a collection of complex, more powerful, more advanced components
built on top of the regular Material UI components. 

These components are highly optimized for performance and suited for data intensive applications. For example, the feature
rich data grid component can easily handle millions of cells of data in a react application.

### Is there any benefit of MUI ecosystem having more than one tool?

The idea of having all these components, tools and systems integrated together in one ecosystem is a central pillar on
which MUI is built.

And as soon as we dive into some real examples, we will be able to see how that integration is implemented in ways that
make for such a wonderful developer experience

## Material UI Functionality

• Component Library
• Layout System
• Styling System
• Theming System
• Responsive Design System

We have the components, but we need a way to arrange them on the screen, and there's where the layout system using grid
component comes in. 

The grid component is based on flex-box, and it uses the familiar 12 column layout system, commonly used in user interface
design. Which allows us to easily create complex layouts with many levels of nested components.

Along with creating layouts with our components, we also need to customize the components to fit the specific look and
feel of our application. It starts with the styling system, which is built using the emotion CSS in JS library. This allows
us to easily define styles within our components to customize and override the default component styles.
Styling individual components is important, but when we are building a complete application, we also need to ensure that
all the styles across the components remains consistent. That's why the styling system is tightly integrated into an overall
theming system.

Theming systems allow us to define global styles that can be accessed and applied from anywhere in our code and affect all
components.

Finally, our applications are dynamic and typically run on many different web enabled devices, from the largest widescreen
desktops to the smallest foot phones. It is our responsibility as developers to ensure that our application provides an
optimal experience for our users, regardless of what device they are using. That is why Material UI has an amazing responsive
design system perfectly integrated into the layout styling and theming system, allowing us to easily adapt our layouts and
styles to any screen size.

The way that Material UI has implemented these systems and integrated them together into one powerful cohesive package is
what makes it truly stand out above the rest, compared to other react component libraries.

## Best practices when learning any coding technology.

### Getting familiar with the docs

The documentations is always going to be the ultimate source of truth for every project. So getting familiar with them and
understanding the information they provide to us is really important when trying to solve any kind of problem.

#### MUI docs

The MUI docs, we can find a list of every component in the component library. And when clicking on each item, we have a
brief description of the component and some demos, and code snippets that are relevant to these demos.

At the bottom of every item explanation. We have a section named API, which when clicked on, we are redirected to that
component API. The API section does not provide all the demos, but all the information about the component, like a list
of every single prop that is available for that component. So if we need to know like what functionality is available or
maybe the default value for certain prop is, or the type of value that it accepts, this is where we'd want to go to find
out.

Below the API section, we have the CSS section. Here is where we will find all of the different CSS classes that can be
used to style and customize the components, e.g.

root class is the base level class for all components, which are styles directly applied to the root element, which is just the base
element that actually gets rendered on the screen.

Every other class are applied in conditional cases. For example, the `.mui.disabled`, which are styles that are only applied
to the root element if `disabled: true`. This enables to very powerful flexibility.

On the sidebar, we have an item named `customization`, this explains to us how to customize all these different parts of
material UI.




