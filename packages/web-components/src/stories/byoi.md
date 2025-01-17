# Bring Your Own Input (BYOI)

## Thesis

We're testing the concept of Bring Your Own Input (BYOI). The core idea is that a generic wrapper component is created, `cbp-form-input`, which can accept any sort of native HTML form input/control slotted within it rather than rendered by it. This wrapper ties the label and description/error messages together to form a predictable, accessible input pattern.

The precedent has already been set in two regards:

1. The Link component optionally allows for slotting a custom link (instead of rendering an anchor) to support component-based routers such as those in React and Vue. In these cases, the anchor (with routing behavior) will be rendered by the `Link` React component. By slotting this `Link` component inside of the `cbp-link` web component, the web component is still able to provide consistent styling and API (CSS API, events, etc.). On a related note, it is invalid HTML to nest interactive elements, such as an anchor inside an anchor.

2. The use of "optional named slots" is an advanced technique where the web component uses a property to specify certain content, but if that content can be more complex than a string or requires markup and/or other web components, it can be optionally slotted in a named slot instead.

Furthermore, this concept is inline with recent discussions of "HTML web components," which challenges the way web components are built and composed, following progressive enhancement more than controlling and rendering the full content and markup. Here are articles from notable names in the industry, who while they might not be at the forefront of web components, have brought some valuable insights:

* Jeremy Keith: https://adactio.com/journal/20618 
* Jim Nielsen: https://blog.jim-nielsen.com/2023/html-web-components/
* Eric Meyer: https://meyerweb.com/eric/thoughts/2023/11/01/blinded-by-the-light-dom/
* Brad Frost: https://bradfrost.com/blog/post/lets-talk-about-web-components/

## Analysis

### Advantages

* Direct access to the interactive controls alleviates a common pain point working with web components. Frameworks like Angular, Vue, and HTMX want to place attributes/directives directly on the DOM elements, which is not easily done when those elements are rendered behind an asynchronously loaded web component that has its own internal rendering lifecycle.
* Slotting native HTML form controls lessens the need to develop and maintain dozens of web components and/or functional components duplicating every form control or input pattern.
  * Web components duplicating form controls usually only implement a portion of the API because the number of attributes is HUGE and often conditional on other attributes (e.g., `input type="number"` adds more attributes like `min` and `max`, while making others such as `maxlength` invalid).
  * This leaves it up to the consuming developer to improvise when the web component falls short of the native HTML spec, or forces the developer to add an extremely large number of properties to the component to duplicate each of the attributes (e.g., the `input` tag accepts 34 attributes *not counting* 40+ global HTML and ARIA attributes).
  * Native HTML elements automatically work with the web platform (e.g., native form post and `FormData()`). This is often not the case with custom widgets/components.
  * Native HTML elements handle user interactions and mobile transformations automatically, requiring significant effort to duplicated them within custom web components, if possible at all.

### Disadvantages

* Loose coupling with the inputs means more DOM manipulation instead of direct control inside of the component's reactive properties and rendering pipeline.
  * DOM manipulation may present challenges with component reactivity.
  * The amount of DOM manipulation seems minimal at this time, only affecting the form field `id` and `aria-` attributes that are dependent on component-specific generated `id`s.
* Using native HTML elements means the consuming app may need to manipulate the native elements and attributes in some cases rather than reactive web component properties.