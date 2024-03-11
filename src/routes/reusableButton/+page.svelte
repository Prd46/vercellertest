<script>
// log_click.js
import log_click from '$lib/log_click'

import IframePopup from '$lib/IframePopup.svelte';

function preview(element) {
  element.style.position = 'relative';

  let iframe;

  function on_mouse_over() {
    // Make an iframe appear to preview the website when you hover.
    iframe = new IframePopup({
      target: element,
      props: {
        src: element.getAttribute('href') || null,
        title: element.getAttribute('title') || null
      }
    });
  }

  function on_mouse_out() {
    iframe.$destroy(); 
    // Make the iframe disappear when the mouse goes away
  }

  element.addEventListener('mouseover', on_mouse_over);
  element.addEventListener('mouseout', on_mouse_out);

  return {
    destroy() {
        // CLEAN UP EVENT LISTENERS WHEN FUNCTION IS DONE
      element.removeEventListener('mouseover', on_mouse_over);
      element.removeEventListener('mouseout', on_mouse_out);
    }
  };
}
</script>

<button use:log_click>Click me</button>
<button use:log_click={{message: 'Button was clicked'}}>Click me</button>
<a href="https://svelte.dev" title="svelte site" use:preview>Svelte</a>