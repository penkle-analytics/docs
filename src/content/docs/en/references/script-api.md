---
title: Script API
description: Script API Reference
---

###### `data-domain`

Specifies the domain used by the client. Needs to match the domain of the website, should not include the protocol (http/https), and should be saved in the Penkle dashboard.

<hr />

###### `data-exclude`

Excludes any route which matches the given value. Separated by a comma to exclude multiple values.

<hr />

###### `data-include`

Includes any route which matches the given value. Separated by a comma to include multiple values.

> **Note**: The data-include attribute takes precedence over the data-exclude attribute. If you specify both attributes, the script will only track the elements specified in the data-include attribute.
