---
title: API du Script
description: Référence API du Script
---

###### `data-domain`

Spécifie le domaine utilisé par le client. Doit correspondre au domaine du site, ne doit pas inclure le protocole (http/https), et doit être enregistré dans le tableau de bord de Penkle.

<hr />

###### `data-exclude`

Exclut toute route correspondant à la valeur donnée. Séparée par une virgule pour exclure plusieurs valeurs.

<hr />

###### `data-include`

Inclut toute route correspondant à la valeur donnée. Séparée par une virgule pour inclure plusieurs valeurs.

> **Remarque :** L'attribut data-include a priorité sur l'attribut data-exclude. Si vous spécifiez les deux attributs, le script ne suivra que les éléments spécifiés dans l'attribut data-include.
