# favicon middleware

This is a favicon middleware of [plant web framework](https://github.com/JacksonTian/plant).

The logic of this middleware is to check if the request is a favicon request, if so, return the favicon file.

## Installation

```bash
npm i @jacksontian/plant-favicon
```

## Usage

Add the favicon middleware to your middleware list.

```js
import favicon from '@jacksontian/plant_favicon';

export default [
  favicon
];
```

The `middleware.js` is under the `app` directory.

## License

The [MIT](./LICENSE) license.
