# Dialog Open property

## Warning in documentation

Removing the `open` attribute will usually hide the dialog. However, doing so has a number of strange additional consequences:

- The `close` event will not be fired.

- The `close()` method, and any [user-agent provided cancelation interface](https://html.spec.whatwg.org/multipage/interactive-elements.html#canceling-dialogs), will no longer be able to close the dialog.

- If the dialog was shown using its `showModal()` method, the `Document` will still be blocked.
  For these reasons, it is generally better to never remove the `open` attribute manually. Instead, use the `close()` method to close the dialog, or the `hidden` attribute to hide it.

## License

European Union Public Licence version 1.2

## Copyright

Copyright © 2020 Rick Beerendonk
