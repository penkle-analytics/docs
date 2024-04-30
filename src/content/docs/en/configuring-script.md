---
title: Configuring the script
description: Learn how to configure the Penkle Analytics tracking script
---

By default, the Penkle Analytics tracking script is configured to work out of the box with no additional configuration. However, you can customize the script to suit your needs.

The Penkle Analytics tracking script has the following configuration options:

#### `data-exclude`:

This attribute allows you to exclude specific elements from being tracked. You can use it to exclude elements that you don't want to track, such as buttons or links.

```html
<script
  async
  defer
  data-domain="yourdomain.com"
  data-exclude="/dashboard,/admin"
  src="https://penkle.com/scripts/penkle.min.js"
></script>
```

In the example above, the script is configured to exclude the `/dashboard` and `/admin` paths from being tracked.

#### `data-include`:

This attribute allows you to include specific elements for tracking. You can use it to include elements that you want to track, such as buttons or links.

```html
<script
  async
  defer
  data-domain="yourdomain.com"
  data-include="/dashboard/settings"
  src="https://penkle.com/scripts/penkle.min.js"
></script>
```

In the example above, the script is configured to include the `/dashboard/settings` path for tracking.

> **Note:** The `data-include` attribute takes precedence over the `data-exclude` attribute. If you specify both attributes, the script will only track the elements specified in the `data-include` attribute.
