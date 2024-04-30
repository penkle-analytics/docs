---
title: Configuration du script
description: Apprenez à configurer le script de suivi Penkle Analytics
---

Par défaut, le script de suivi Penkle Analytics est configuré pour fonctionner immédiatement sans configuration supplémentaire. Cependant, vous pouvez personnaliser le script selon vos besoins.

## Options de configuration

Le script de suivi Penkle Analytics dispose des options de configuration suivantes :

### `data-exclude` :

Cet attribut vous permet d'exclure des éléments spécifiques du suivi. Vous pouvez l'utiliser pour exclure des éléments que vous ne souhaitez pas suivre, tels que des boutons ou des liens.

```html
<script
  async
  defer
  data-domain="votredomaine.com"
  data-exclude="/dashboard,/admin"
  src="https://penkle.com/scripts/penkle.min.js"
></script>
```

Dans l'exemple ci-dessus, le script est configuré pour exclure les chemins `/dashboard` et `/admin` du suivi.

### `data-include` :

Cet attribut vous permet d'inclure des éléments spécifiques dans le suivi. Vous pouvez l'utiliser pour inclure des éléments que vous souhaitez suivre, tels que des boutons ou des liens.

```html
<script
  async
  defer
  data-domain="votredomaine.com"
  data-include="/dashboard/settings"
  src="https://penkle.com/scripts/penkle.min.js"
></script>
```

Dans l'exemple ci-dessus, le script est configuré pour inclure le chemin `/dashboard/settings` dans le suivi.

> **Remarque :** L'attribut `data-include` a priorité sur l'attribut `data-exclude`. Si vous spécifiez les deux attributs, le script ne suivra que les éléments spécifiés dans l'attribut `data-include`.
