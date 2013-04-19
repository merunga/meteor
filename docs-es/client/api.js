Template.api.isClient = {
  id: "meteor_isclient",
  name: "Meteor.isClient",
  locus: "Anywhere",
  descr: ["Boolean variable.  True si se ejecuta en enorno cliente."]
};

Template.api.isServer = {
  id: "meteor_isserver",
  name: "Meteor.isServer",
  locus: "Anywhere",
  descr: ["Boolean variable.  True si se ejecuta en enorno cliente."]
};

Template.api.startup = {
  id: "meteor_startup",
  name: "Meteor.startup(func)",
  locus: "Anywhere",
  descr: ["Se ejecuta el código cuando un cliente o un servidor se inicia."],
  args: [
    {name: "func",
     type: "Function",
     descr: "Una función que se ejecuta en el inicio."}
  ]
};

Template.api.absoluteUrl = {
  id: "meteor_absoluteurl",
  name: "Meteor.absoluteUrl([path], [options])",
  locus: "Anywhere",
  descr: ["Genera una URL absoluta que apunta a la aplicación. El servidor "
          + "lee desde  la variable de entorno `ROOT_URL` para determinar "
          + "dónde se está ejecutando. Esta es adquirida automaticamente para "
          + "las apps desplegadas con `meteor deploy`, pero se debe proporcionar cuando "
          + "se utiliza `meteor bundle`."],
  args: [
    {name: "path",
     type: "String",
     descr: 'Una ruta para anexar a la dirección URL raiz. No incluya una barra "`/`".'
    }
  ],
  options: [
    {name: "secure",
     type: "Boolean",
     descr: "Crea una HTTPS URL."
    },
    {name: "replaceLocalhost",
     type: "Boolean",
     descr: "Sustituye localhost por  127.0.0.1.  Útil para los servicios que no reconocen localhost como nombre de dominio."},
    {name: "rootUrl",
     type: "String",
     descr: "Reemplaza el por defecto ROOT_URL del entorno del servidor. Por ejemplo: \"`http://foo.example.com`\""
    }
  ]
};

Template.api.settings = {
  id: "meteor_settings",
  name: "Meteor.settings",
  locus: "Server and client",
  descr: ["`Meteor.settings` contiene las opciones específicas de implementación que fueron" +
          "proporcionadas utilizando la opcióne `--settings` para `meteor run` o `meteor deploy`. " +
          "Si proporciona la opción `--settings`, `Meteor.settings` será un " +
          "objeto JSON en el archivo que se especifique. De lo contrario, `Meteor.settings` será " +
          "un objeto vacio. Si el objeto contiene una clave con nombre `public`, entonces " +
          "`Meteor.settings.public` también estará disponible en el cliente."]
};

Template.api.release = {
  id: "meteor_release",
  name: "Meteor.release",
  locus: "Server and client",
  descr: ["`Meteor.release` es un string conteniendo el nombre del " +
          "[release](#meteorupdate) con el que el projecto ha sido construido (por " +
          "ejemplo, `\"" +
          // Put the current release in the docs as the example)
          (Meteor.release ? Meteor.release : '0.6.1') +
          "\"`). Es `undefined` si el proyecto se construye a partir de un git " +
          "checkout de Meteor."]
};

Template.api.ejsonParse = {
  id: "ejson_parse",
  name: "EJSON.parse(str)",
  locus: "Anywhere",
  args: [ {name: "str", type: "String", descr: "A string to parse into an EJSON value."} ],
  descr: ["Analiza ua string dentro de un valor EJSON. Lanza un error si el string no es EJSON válido."]
},

Template.api.ejsonStringify = {
  id: "ejson_stringify",
  name: "EJSON.stringify(val)",
  locus: "Anywhere",
  args: [ {name: "val", type: "EJSON-compatible value", descr: "A value to stringify."} ],
  descr: ["Serializa un valor a un string.\n\n Para valores EJSON, la serialización " +
          "completa representa el valor. Para valores non-EJSON, serializa de la " +
          "misma forma que `JSON.stringify`."]
},


Template.api.ejsonFromJSONValue = {
  id: "ejson_from_json_value",
  name: "EJSON.fromJSONValue(val)",
  locus: "Anywhere",
  args: [ {name: "val", type: "JSON-compatible value", descr: "A value to deserialize into EJSON."} ],
  descr: ["Deserializa un valor EJSON de su representación sin formato JSON."]
},

Template.api.ejsonToJSONValue = {
  id: "ejson_to_json_value",
  name: "EJSON.toJSONValue(val)",
  locus: "Anywhere",
  args: [ {name: "val", type: "EJSON-compatible value", descr: "A value to serialize to plain JSON."} ],
  descr: ["Serializa un valor EJSON-compatible value en su representación sin formato JSON."]
},

Template.api.ejsonEquals = {
  id: "ejson_equals",
  name: "EJSON.equals(a, b)", //doc options?
  locus: "Anywhere",
  args: [ {name: "a", type: "EJSON-compatible object"},
          {name: "b", type: "EJSON-compatible object"} ],
  descr: ["Returna true si `a` y `b` son iguales entre si.  Returna false en otro caso." +
          "  Utilice el método `equals` en `a` si está presente, de otro modo realice una comparación profunda."]
},

Template.api.ejsonClone = {
  id: "ejson_clone",
  name: "EJSON.clone(val)",
  locus: "Anywhere",
  args: [ {name: "val", type: "EJSON-compatible value", descr: "A value to copy."} ],
  descr: ["Returno una copia en profundidad de `val`."]
},

Template.api.ejsonNewBinary = {
  id: "ejson_new_binary",
  name: "EJSON.newBinary(size)",
  locus: "Anywhere",
  args: [ {name: "size", type: "Number", descr: "El número de  bytes de datos binarios para asignar."} ],
  descr: ["Asigna un nuevo buffer de datos binarios que  EJSON puede serializar."]
},

Template.api.ejsonAddType = {
  id: "ejson_add_type",
  name: "EJSON.addType(name, factory)",
  locus: "Anywhere",
  args: [
    {name: "name",
     type: "String",
     descr: "Una etiqueta para su tipo peronalizado; debe ser único entre los tipos de datos personalizados definidos en el proyecto, y debe coincidir el resultado de su tipo de método `typeName` ."
    },
    {name: "factory",
     type: "Function",
     descr: "Una función que  deserializa un valor JSON-compatible dentro de una instancia de su type. Debe coincidir con la serialización realizada por su tipo de método `toJSONValue`."
    }
  ],
  descr: ["Añade un datatype personalizado a EJSON."]
};

Template.api.ejsonTypeClone = {
  id: "ejson_type_clone",
  name: "<i>instance</i>.clone()",
  descr: ["Retorna una valor `r` tal que `this.equals(r)` es true, y modificaciones en `r`  no afectan `this` y viceversa."]
};

Template.api.ejsonTypeEquals = {
  id: "ejson_type_equals",
  name: "<i>instance</i>.equals(other)",
  args: [ {name: "other", type: "object", descr: "Another object to compare this to."}],
  descr: ["Retorna `true` si `other` tiene un valor igual a  `this`; `false` de otra manera."]
};

Template.api.ejsonTypeName = {
  id: "ejson_type_typeName",
  name: "<i>instance</i>.typeName()",
  descr: ["Retorna la etiqueta utilizada para identificar este tipo.  Debe coincidir con la etiqueta utilizada para registrar este tipo con [`EJSON.addType`](#ejson_add_type)."]
};

Template.api.ejsonTypeToJSONValue = {
  id: "ejson_type_toJSONValue",
  name: "<i>instance</i>.toJSONValue()",
  descr: ["Serializa esta instancian en un valor JSON-compatible."]
};

Template.api.publish = {
  id: "meteor_publish",
  name: "Meteor.publish(name, func)",
  locus: "Server",
  descr: ["Publica un conjunto de registros."],
  args: [
    {name: "name",
     type: "String",
     descr: "Nombre del atributo establecido.  Si `null`, el conjunto no tiene nombre, y el conjunto de registros se envía automaticamente a todos los clientes conectados."},
    {name: "func",
     type: "Function",
     descr: "Función llamada en el servidor cada vez que se suscribe un cliente.  Dentro de la función, `this` es el objeto manejador de publicación, descrito a continuación.  Si el cliente ha pasado argumentos a `subscribe`, la función es llamada con los mismos argumentos."}
  ]
};

Template.api.subscription_added = {
  id: "publish_added",
  name: "<i>this</i>.added(collection, id, fields)",
  locus: "Server",
  descr: ["Llama dentro de la función de pblicaciónn.  Informa al suscriptor que un documento ha sido añadido al conjunto de registros."],
  args: [
    {name: "collection",
     type: "String",
     descr: "El nombre de la colección que contiene el documento nuevo."
    },
    {name: "id",
     type: "String",
     descr: "El nuevo ID de documento."
    },
    {name: "fields",
     type: "Object",
     descr: "Los campos en el nuevo documento.  Si `_id` está presente es ignorado."
    }
  ]
};

Template.api.subscription_changed = {
  id: "publish_changed",
  name: "<i>this</i>.changed(collection, id, fields)",
  locus: "Server",
  descr: ["Llama dentro de la función de publicación.  Informa al suscriptor que un documento en el conjunto de registros ha sido modificado."],
  args: [
    {name: "collection",
     type: "String",
     descr: "El nombre de la colección que contiene el documento cambiado."
    },
    {name: "id",
     type: "String",
     descr: "El ID del documento cambiado."
    },
    {name: "fields",
     type: "Object",
     descr: "Los campos del documento que han cambiado, junto a sus nuevos valores.  Si un campo no está presente en `fields`  se deja sin cambiar; si está presente en `fields` y tiene un valor de `undefined` se elimina del documento.  Si `_id` está presente se ignora."
    }
  ]
};

Template.api.subscription_removed = {
  id: "publish_removed",
  name: "<i>this</i>.removed(collection, id)",
  locus: "Server",
  descr: ["Llama dentro de la función de publicación.  Informa al suscriptor que un documento ha sido eliminado del conjunto de registros."],
  args: [
    {name: "collection",
     type: "String",
     descr: "El nombre de la colección del que se ha borrado el documento."
    },
    {name: "id",
     type: "String",
     descr: "El ID del documento que ha sido borrado."
    }
  ]
};

Template.api.subscription_ready = {
  id: "publish_ready",
  name: "<i>this</i>.ready()",
  locus: "Server",
  descr: ["Llama dentro de la función de publicación.  Informa al suscriptor que una inicial, instantánea completa del conjunto de regitros ha sido enviado.  Esto desencadenará una llamada en el cliente para el callback `onReady` pasado a  [`Meteor.subscribe`](#meteor_subscribe), si hay alguno."]
};


Template.api.subscription_error = {
  id: "publish_error",
  name: "<i>this</i>.error(error)",
  locus: "Server",
  descr: ["Llama dentro de la función de publicación.  Detiene la suscripción de este cliente, desencadenndo una llamada en el cliente para el callback `onError`  pasado a [`Meteor.subscribe`](#meteor_subscribe), si hay alguno. Si `error` no es un [`Meteor.Error`](#meteor_error), se asignará a `Meteor.Error(500, \"Internal server error\")`."]
};

Template.api.subscription_stop = {
  id: "publish_stop",
  name: "<i>this</i>.stop()",
  locus: "Server",
  descr: ["Llama dentro de la función de publicación.  Detiene la suscripción de este cliente; el callback `onError`  *not* es invocado en el cliente."]
};

Template.api.subscription_onStop = {
  id: "publish_onstop",
  name: "<i>this</i>.onStop(func)",
  locus: "Server",
  descr: ["Llama dentro de la función de publicación.  Registra una función callback para ejecutar cuando la suscripción se detenga."],
  args: [
    {name: "func",
     type: "Function",
     descr: "La función callback"
    }
  ]
};

Template.api.subscription_userId = {
  id: "publish_userId",
  name: "<i>this</i>.userId",
  locus: "Server",
  descr: ["Accede dentro de la función de publicación. E id del usuario conectado, o `null` si ningún usuario está conectado."]
};


Template.api.subscribe = {
  id: "meteor_subscribe",
  name: "Meteor.subscribe(name [, arg1, arg2, ... ] [, callbacks])",
  locus: "Client",
  descr: ["Se suscribe a un conjunto de regitros.  Retorna un manejador que proporciona métodos `stop()` y `ready()`."],
  args: [
    {name: "name",
     type: "String",
     descr: "Nombre de la suscripción.  Coincide con el nombre de llamada al servidor publish()."},
    {name: "arg1, arg2, ...",
     type: "Any",
     descr: "argumentos opcionales pasados ​​a la función de publicación en el servidor."},
    {name: "callbacks",
     type: "Function or Object",
     descr: "Opcional. Puede incluir los callbacks `onError` y `onReady`.Si se pasa una función en lugar de un objeto, se interpreta como un callback `onReady`."}
  ]
};

Template.api.methods = {
  id: "meteor_methods",
  name: "Meteor.methods(methods)",
  locus: "Anywhere",
  descr: ["Define funciones que pueden ser invocados a través de la red por los clientes."],
  args: [
    {name: "methods",
     type: "Object",
     descr: "Diccionario cuyas claves son nombres de métodos y los  valores son  funciones."}
  ]
};

Template.api.method_invocation_userId = {
  id: "method_userId",
  name: "<i>this</i>.userId",
  locus: "Anywhere",
  descr: ["El id del usuario que realizó la llamada a este método, o `null` si ningún usuario ha iniciado sesión."]
};

Template.api.method_invocation_setUserId = {
  id: "method_setUserId",
  name: "<i>this</i>.setUserId(userId)",
  locus: "Server",
  descr: ["Establece el usuario conectado."],
  args: [
    {name: "userId",
     type: "String or null",
     descr: "El valor que debe ser devuelto por `userId` en esta conexión."}
  ]
};

Template.api.method_invocation_unblock = {
  id: "method_unblock",
  name: "<i>this</i>.unblock()",
  locus: "Server",
  descr: ["Llama dentro de una invocación de método . Permite posterior método de este cliente para empezar a ejecutar en una nueva fibra."]
};

Template.api.method_invocation_isSimulation = {
  id: "method_issimulation",
  name: "<i>this</i>.isSimulation",
  locus: "Anywhere",
  descr: ["Accede dentro de la invocación del método. Valor boolean, true si esta invocación es un stub."]
};

Template.api.error = {
  id: "meteor_error",
  name: "new Meteor.Error(error, reason, details)",
  locus: "Anywhere",
  descr: ["Esta clase representa un error simbólico lanzado por un método."],
  args: [
    {name: "error",
     type: "Number",
     descr: "Un código de error numérico, probablemente similar a un código HTTP  (ej, 404, 500)."},
    {name: "reason",
     type: "String",
     descr: "Opcional.  Un corto resumen human-readable del error, como 'Not Found'."},
    {name: "details",
     type: "String",
     descr: "Opcional.  Información adicional sobre el error, como  un seguimiento de la pila textual."}
  ]
};

Template.api.meteor_call = {
  id: "meteor_call",
  name: "Meteor.call(name, param1, param2, ... [, asyncCallback])",
  locus: "Anywhere",
  descr: ["Invoca un método pasando cualquier número de argumentos."],
  args: [
    {name: "name",
     type: "String",
     descr: "Nombre del método a invocar"},
    {name: "param1, param2, ...",
     type: "EJSON",
     descr: "Opcional, argumentos de métodos"},
    {name: "asyncCallback",
     type: "Function",
     descr: "Callback Opcional, que se llama de forma asincrónica con el error o el resultado después de que el método esté completo. Si no se proporciona, el método se ejecuta sincrónicamente, si es posible (ver más abajo)."}
  ]
};

Template.api.meteor_apply = {
  id: "meteor_apply",
  name: "Meteor.apply(name, params [, options] [, asyncCallback])",
  locus: "Anywhere",
  descr: ["Invoca un método pasando un array de argumentos."],
  args: [
    {name: "name",
     type: "String",
     descr: "Nombre del método a invocar"},
    {name: "params",
     type: "Array",
     descr: "argumentos de método"},
    {name: "asyncCallback",
     type: "Function",
     descr: "Callback opcional ; la misma semántica que en [`Meteor.call`](#meteor_call)."}
  ],
  options: [
    {name: "wait",
     type: "Boolean",
     descr: "(Sólo cliente) Si es true, no enía este método hasta que todos las llamadas a métodos anteriores han concluido, y no envíe las llamadas a métodos siguientes hasta que se complete esta."},
    {name: "onResultReceived",
     type: "Function",
     descr: "(Sólo cliente) Este callback se invoca con el error o el resultado del método (como `asyncCallback`)  tan pronto como el error o el resultado estén disponible. La caché local sin embargo, puede no reflejar la escrituras realizadas por el método."}
  ]
};

Template.api.status = {
  id: "meteor_status",
  name: "Meteor.status()",
  locus: "Client",
  descr: ["Obtiene el estado de la conexión actual. Una fuente de datos reactiva."]
};

Template.api.reconnect = {
  id: "meteor_reconnect",
  name: "Meteor.reconnect()",
  locus: "Client",
  descr: [
    "Fuerza un intento de reconexión inmediata si el cliente no está conectado al servidor.",
    "Este método no hace nada si el cliente ya está conectado."]
};

Template.api.connect = {
  id: "meteor_connect",
  name: "Meteor.connect(url)",
  locus: "Client",
  descr: ["Conecta con el servidor de una diferente aplicación Meteor para suscribirse a los conjuntos de documentos e invocar sus métodos remotos."],
  args: [
    {name: "url",
     type: "String",
     descr: "La  URL de otra aplicación Meteor."}
  ]
};

// onAutopublish

Template.api.meteor_collection = {
  id: "meteor_collection",
  name: "new Meteor.Collection(name, [options])",
  locus: "Anywhere",
  descr: ["Constructor para una Collection"],
  args: [
    {name: "name",
     type: "String",
     descr: "El nombre de una colección.  Si null, crea una no-administrado (no-sincronizado) colección local."}
  ],
  options: [
    {name: "manager",
     type: "Object",
     descr: "La conexión Meteor que gestionará esta colección, por defecto en `Meteor` si null. A las Colecciones no-administradas (`name` es null) no se les puede especificar un gestor."
    },
    {name: "idGeneration",
     type: "String",
     descr: "El método de generación de los campos `_id` de nuevo documentos en esta colección.  Posibles valores:\n\n" +
     " - **`'STRING'`**: random strings\n" +
     " - **`'MONGO'`**:  random [`Meteor.Collection.ObjectID`](#collection_object_id) values\n\n" +
     "La técnica de generación de id por defecto es `'STRING'`."
    },
    {name: "transform",
     type: "Function",
     descr: "Una opcional función de transformación. Se pasarán documentos a través de esta función antes de ser devueltos desde `fetch` o `findOne`, y antes de pasar a los callbacks de `observe`, `allow`, y `deny`."
    }
  ]
};

Template.api.find = {
  id: "find",
  name: "<em>collection</em>.find(selector, [options])",
  locus: "Anywhere",
  descr: ["Encuentra los documentos en una colección que coinciden con el selector."],
  args: [
    {name: "selector",
     type: "Mongo selector, or String",
     type_link: "selectors",
     descr: "The query, La consulta"}
  ],
  options: [
    {name: "sort",
     type: "Sort specifier",
     type_link: "sortspecifiers",
     descr: "Modificar ordenación (por defecto: orden natural)"},
    {name: "skip",
     type: "Number",
     descr: "Número de resultados para saltar al principio"},
    {name: "limit",
     type: "Number",
     descr: "Número máximo de resultados a devolver"},
    {name: "fields",
     type: "Field specifier",
     type_link: "fieldspecifiers",
     descr: "(Sólo servidor) Diccionario de campos para retornar o excluir."},
    {name: "reactive",
     type: "Boolean",
     descr: "(Sólo cliente) Por defecto `true`; pasar `false` para desctivar la reactividad"},
    {name: "transform",
     type: "Function",
     descr: "Invalida `transform` en el  [`Collection`](#collections) para este cursor.  Pasar `null` para desactivar transformación."}
  ]
};

Template.api.findone = {
  id: "findone",
  name: "<em>collection</em>.findOne(selector, [options])",
  locus: "Anywhere",
  descr: ["Busca el primer documento que coincida con el selector, según lo ordenado por las opciones sort y skip."],
  args: [
    {name: "selector",
     type: "Mongo selector, or String",
     type_link: "selectors",
     descr: "The query"}
  ],
  options: [
    {name: "sort",
     type: "Sort specifier",
     type_link: "sortspecifiers",
     descr: "Modificar la ordenación (por defecto: orden natural)"},
    {name: "skip",
     type: "Number",
     descr: "Número de resultados para saltar hasta el principio"},
    {name: "fields",
     type: "Field specifier",
     type_link: "fieldspecifiers",
     descr: "(Sólo servidor) Diccionario de campos para retornar o excluir."},
    {name: "reactive",
     type: "Boolean",
     descr: "(Sólo cliente) Por defecto true; pasar false para desactivar la reactividad"},
    {name: "transform",
     type: "Function",
     descr:  "Invalida `transform` en el  [`Collection`](#collections) para este cursor.  Pasar `null` para desactivar transformación."
    }
  ]
};

Template.api.insert = {
  id: "insert",
  name: "<em>collection</em>.insert(doc, [callback])",
  locus: "Anywhere",
  descr: ["Inserta un documento en la colección.  Returna un único _id."],
  args: [
    {name: "doc",
     type: "Object",
     descr: "El documento a insertar. Puede aún no tener un atributo  _id, en cuyo caso Meteor lo generará para usted."},
    {name: "callback",
     type: "Function",
     descr: "Opcional.  Si está presente, se llama con un objeto error  como el primer argumento y , si no hay error, el _id como el segundo."}
  ]
};

Template.api.update = {
  id: "update",
  name: "<em>collection</em>.update(selector, modifier, [options], [callback])",
  locus: "Anywhere",
  descr: ["Modify one or more documents in the collection"],
  args: [
    {name: "selector",
     type: "Mongo selector, or object id",
     type_link: "selectors",
     descr: "Specifies which documents to modify"},
    {name: "modifier",
     type: "Mongo modifier",
     type_link: "modifiers",
     descr: "Specifies how to modify the documents"},
    {name: "callback",
     type: "Function",
     descr: "Optional.  If present, called with an error object as its argument."}
  ],
  options: [
    {name: "multi",
     type: "Boolean",
     descr: "True to modify all matching documents; false to only modify one of the matching documents (the default)."}
  ]
};

Template.api.remove = {
  id: "remove",
  name: "<em>collection</em>.remove(selector, [callback])",
  locus: "Anywhere",
  descr: ["Remove documents from the collection"],
  args: [
    {name: "selector",
     type: "Mongo selector, or object id",
     type_link: "selectors",
     descr: "Specifies which documents to remove"},
    {name: "callback",
     type: "Function",
     descr: "Optional.  If present, called with an error object as its argument."}
  ]
};

Template.api.allow = {
  id: "allow",
  name: "<em>collection</em>.allow(options)",
  locus: "Server",
  descr: ["Allow users to write directly to this collection from client code, subject to limitations you define."],
  options: [
    {name: "insert, update, remove",
     type: "Function",
     descr: "Functions that look at a proposed modification to the database and return true if it should be allowed."},
    {name: "fetch",
     type: "Array of String",
     descr: "Optional performance enhancement. Limits the fields that will be fetched from the database for inspection by your `update` and `remove` functions."},
    {name: "transform",
     type: "Function",
     descr: "Overrides `transform` on the  [`Collection`](#collections).  Pass `null` to disable transformation."}
  ]
};

Template.api.deny = {
  id: "deny",
  name: "<em>collection</em>.deny(options)",
  locus: "Server",
  descr: ["Override `allow` rules."],
  options: [
    {name: "insert, update, remove",
     type: "Function",
     descr: "Functions that look at a proposed modification to the database and return true if it should be denied, even if an `allow` rule says otherwise."},
    {name: "fetch",
     type: "Array of Strings",
     descr: "Optional performance enhancement. Limits the fields that will be fetched from the database for inspection by your `update` and `remove` functions."},
    {name: "transform",
     type: "Function",
     descr:  "Overrides `transform` on the  [`Collection`](#collections).  Pass `null` to disable transformation."}
  ]
};


Template.api.cursor_count = {
  id: "count",
  name: "<em>cursor</em>.count()",
  locus: "Anywhere",
  descr: ["Returns the number of documents that match a query."]
};

Template.api.cursor_fetch = {
  id: "fetch",
  name: "<em>cursor</em>.fetch()",
  locus: "Anywhere",
  descr: ["Return all matching documents as an Array."]
};

Template.api.cursor_foreach = {
  id: "foreach",
  name: "<em>cursor</em>.forEach(callback)",
  locus: "Anywhere",
  descr: ["Call `callback` once for each matching document, sequentially and synchronously."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Function to call."}
  ]
};

Template.api.cursor_map = {
  id: "map",
  name: "<em>cursor</em>.map(callback)",
  locus: "Anywhere",
  descr: ["Map callback over all matching documents.  Returns an Array."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Function to call."}
  ]
};

Template.api.cursor_rewind = {
  id: "rewind",
  name: "<em>cursor</em>.rewind()",
  locus: "Anywhere",
  descr: ["Resets the query cursor."],
  args: [ ]
};

Template.api.cursor_observe = {
  id: "observe",
  name: "<em>cursor</em>.observe(callbacks)",
  locus: "Anywhere",
  descr: ["Watch a query.  Receive callbacks as the result set changes."],
  args: [
    {name: "callbacks",
     type: "Object",
     descr: "Functions to call to deliver the result set as it changes"}
  ]
};

Template.api.cursor_observe_changes = {
  id: "observe_changes",
  name: "<em>cursor</em>.observeChanges(callbacks)",
  locus: "Anywhere",
  descr: ["Watch a query.  Receive callbacks as the result set changes.  Only the differences between the old and new documents are passed to the callbacks."],
  args: [
    {name: "callbacks",
     type: "Object",
     descr: "Functions to call to deliver the result set as it changes"}
  ]
};

Template.api.id = {
  id: "meteor_id",
  name: "Random.id()",
  locus: "Anywhere",
  descr: ["Return a unique identifier."],
  args: [ ]
};

Template.api.collection_object_id = {
  id: "collection_object_id",
  name: "new Meteor.Collection.ObjectID(hexString)",
  locus: "Anywhere",
  descr: ["Create a Mongo-style `ObjectID`.  If you don't specify a `hexString`, the `ObjectID` will generated randomly (not using MongoDB's ID construction rules)."],
  args: [ {
    name: "hexString",
    type: "String",
    descr: ["Optional.  The 24-character hexadecimal contents of the ObjectID to create"]
  }]
};

Template.api.selectors = {
  id: "selectors",
  name: "Mongo-style Selectors"
};

Template.api.modifiers = {
  id: "modifiers",
  name: "Mongo-style Modifiers"
};

Template.api.sortspecifiers = {
  id: "sortspecifiers",
  name: "Sort Specifiers"
};

Template.api.fieldspecifiers = {
  id: "fieldspecifiers",
  name: "Field Specifiers"
};

////// DEPS

Template.api.deps_autorun = {
  id: "deps_autorun",
  name: "Deps.autorun(runFunc)",
  locus: "Client",
  descr: ["Run a function now and rerun it later whenever its dependencies change. Returns a Computation object that can be used to stop or observe the rerunning."],
  args: [
    {name: "runFunc",
     type: "Function",
     descr: "The function to run. It receives one argument: the Computation object that will be returned."}
  ]
};

Template.api.deps_flush = {
  id: "deps_flush",
  name: "Deps.flush()",
  locus: "Client",
  descr: ["Process all reactive updates immediately and ensure that all invalidated computations are rerun."]
};

Template.api.deps_nonreactive = {
  id: "deps_nonreactive",
  name: "Deps.nonreactive(func)",
  locus: "Client",
  descr: ["Run a function without tracking dependencies."],
  args: [
    {name: "func",
     type: "Function",
     descr: "A function to call immediately."}
  ]
};

Template.api.deps_active = {
  id: "deps_active",
  name: "Deps.active",
  locus: "Client",
  descr: ["True if there is a current computation, meaning that dependencies on reactive data sources will be tracked and potentially cause the current computation to be rerun."]
};

Template.api.deps_currentcomputation = {
  id: "deps_currentcomputation",
  name: "Deps.currentComputation",
  locus: "Client",
  descr: ["The current computation, or `null` if there isn't one.  The current computation is the [`Deps.Computation`](#deps_computation) object created by the innermost active call to `Deps.autorun`, and it's the computation that gains dependencies when reactive data sources are accessed."]
};

Template.api.deps_oninvalidate = {
  id: "deps_oninvalidate",
  name: "Deps.onInvalidate(callback)",
  locus: "Client",
  descr: ["Registers a new [`onInvalidate`](#computation_oninvalidate) callback on the current computation (which must exist), to be called immediately when the current computation is invalidated or stopped."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "A callback function that will be invoked as `func(c)`, where `c` is the computation on which the callback is registered."}
  ]
};

Template.api.deps_afterflush = {
  id: "deps_afterflush",
  name: "Deps.afterFlush(callback)",
  locus: "Client",
  descr: ["Schedules a function to be called during the next flush, or later in the current flush if one is in progress, after all invalidated computations have been rerun.  The function will be run once and not on subsequent flushes unless `afterFlush` is called again."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "A function to call at flush time."}
  ]
};

Template.api.computation_stop = {
  id: "computation_stop",
  name: "<em>computation</em>.stop()",
  locus: "Client",
  descr: ["Prevents this computation from rerunning."]
};

Template.api.computation_invalidate = {
  id: "computation_invalidate",
  name: "<em>computation</em>.invalidate()",
  locus: "Client",
  descr: ["Invalidates this computation so that it will be rerun."]
};

Template.api.computation_oninvalidate = {
  id: "computation_oninvalidate",
  name: "<em>computation</em>.onInvalidate(callback)",
  locus: "Client",
  descr: ["Registers `callback` to run when this computation is next invalidated, or runs it immediately if the computation is already invalidated.  The callback is run exactly once and not upon future invalidations unless `onInvalidate` is called again after the computation becomes valid again."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Function to be called on invalidation. Receives one argument, the computation that was invalidated."}
  ]
};

Template.api.computation_stopped = {
  id: "computation_stopped",
  name: "<em>computation</em>.stopped",
  locus: "Client",
  descr: ["True if this computation has been stopped."]
};

Template.api.computation_invalidated = {
  id: "computation_invalidated",
  name: "<em>computation</em>.invalidated",
  locus: "Client",
  descr: ["True if this computation has been invalidated (and not yet rerun), or if it has been stopped."]
};

Template.api.computation_firstrun = {
  id: "computation_firstrun",
  name: "<em>computation</em>.firstRun",
  locus: "Client",
  descr: ["True during the initial run of the computation at the time `Deps.autorun` is called, and false on subsequent reruns and at other times."]
};

Template.api.dependency_changed = {
  id: "dependency_changed",
  name: "<em>dependency</em>.changed()",
  locus: "Client",
  descr: ["Invalidate all dependent computations immediately and remove them as dependents."]
};

Template.api.dependency_depend = {
  id: "dependency_depend",
  name: "<em>dependency</em>.depend([fromComputation])",
  locus: "Client",
  descr: ["Declares that the current computation (or `fromComputation` if given) depends on `dependency`.  The computation will be invalidated the next time `dependency` changes.", "If there is no current computation and `depend()` is called with no arguments, it does nothing and returns false.", "Returns true if the computation is a new dependent of `dependency` rather than an existing one."],
  args: [
    {name: "fromComputation",
     type: "Deps.Computation",
     descr: "An optional computation declared to depend on `dependency` instead of the current computation."}
  ]
};

Template.api.dependency_hasdependents = {
  id: "dependency_hasdependents",
  name: "<em>dependency</em>.hasDependents()",
  locus: "Client",
  descr: ["True if this Dependency has one or more dependent Computations, which would be invalidated if this Dependency were to change."]
};

//////

// writeFence
// invalidationCrossbar

Template.api.render = {
  id: "meteor_render",
  name: "Meteor.render(htmlFunc)",
  locus: "Client",
  descr: ["Create DOM nodes that automatically update themselves as data changes."],
  args: [
    {name: "htmlFunc",
     type: "Function returning a string of HTML",
     descr: "Function that generates HTML to be rendered.  Called immediately and re-run whenever data changes.  May also be a string of HTML instead of a function."}
  ]
};

Template.api.renderList = {
  id: "meteor_renderlist",
  name: "Meteor.renderList(observable, docFunc, [elseFunc])",
  locus: "Client",
  descr: ["Create DOM nodes that automatically update themselves based on the results of a database query."],
  args: [
    {name: "observable",
     type: "Cursor",
     type_link: "meteor_collection_cursor",
     descr: "Query cursor to observe as a reactive source of ordered documents."},
    {name: "docFunc",
     type: "Function taking a document and returning HTML",
     descr: "Render function to be called for each document."},
    {name: "elseFunc",
     type: "Function returning HTML",
     descr: "Optional.  Render function to be called when query is empty."}
  ]
};


Template.api.eventmaps = {
  id: "eventmaps",
  name: "Event Maps"
};

Template.api.constant = {
  id: "constant",
  name: "Constant regions"
};

Template.api.isolate = {
  id: "isolate",
  name: "Reactivity isolation"
};



Template.api.user = {
  id: "meteor_user",
  name: "Meteor.user()",
  locus: "Anywhere but publish functions",
  descr: ["Get the current user record, or `null` if no user is logged in. A reactive data source."]
};

Template.api.currentUser = {
  id: "template_currentuser",
  name: "{{currentUser}}",
  locus: "Handlebars templates",
  descr: ["Calls [Meteor.user()](#meteor_user). Use `{{#if currentUser}}` to check whether the user is logged in."]
};

Template.api.userId = {
  id: "meteor_userid",
  name: "Meteor.userId()",
  locus: "Anywhere but publish functions",
  descr: ["Get the current user id, or `null` if no user is logged in. A reactive data source."]
};


Template.api.users = {
  id: "meteor_users",
  name: "Meteor.users",
  locus: "Anywhere",
  descr: ["A [Meteor.Collection](#collections) containing user documents."]
};

Template.api.loggingIn = {
  id: "meteor_loggingin",
  name: "Meteor.loggingIn()",
  locus: "Client",
  descr: ["True if a login method (such as `Meteor.loginWithPassword`, `Meteor.loginWithFacebook`, or `Accounts.createUser`) is currently in progress. A reactive data source."]
};

Template.api.loggingInTemplate = {
  id: "template_loggingin",
  name: "{{loggingIn}}",
  locus: "Handlebars templates",
  descr: ["Calls [Meteor.loggingIn()](#meteor_loggingin)."]
};



Template.api.logout = {
  id: "meteor_logout",
  name: "Meteor.logout([callback])",
  locus: "Client",
  descr: ["Log the user out."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ]
};


Template.api.loginWithPassword = {
  id: "meteor_loginwithpassword",
  name: "Meteor.loginWithPassword(user, password, [callback])",
  locus: "Client",
  descr: ["Log the user in with a password."],
  args: [
    {
      name: "user",
      type: "Object or String",
      descr: "Either a string interpreted as a username or an email; or an object with a single key: `email`, `username` or `id`."
    },
    {
      name: "password",
      type: "String",
      descr: "The user's password. This is __not__ sent in plain text over the wire &mdash; it is secured with [SRP](http://en.wikipedia.org/wiki/Secure_Remote_Password_protocol)."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ]
};


Template.api.loginWithExternalService = {
  id: "meteor_loginwithexternalservice",
  name: "Meteor.loginWith<i>ExternalService</i>([options], [callback])",
  locus: "Client",
  descr: ["Log the user in using an external service."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ],
  options: [
    {
      name: "requestPermissions",
      type: "Array of Strings",
      descr: "A list of permissions to request from the user."
    },
    {
      name: "requestOfflineToken",
      type: "Boolean",
      descr: "If true, asks the user for permission to act on their behalf when offline. This stores an additional offline token in the `services` field of the user document. Currently only supported with Google."
    }
  ]
};



Template.api.accounts_config = {
  id: "accounts_config",
  name: "Accounts.config(options)",
  locus: "Anywhere",
  descr: ["Set global accounts options."],
  options: [
    {
      name: "sendVerificationEmail",
      type: "Boolean",
      descr: "New users with an email address will receive an address verification email."
    },
    {
      name: "forbidClientAccountCreation",
      type: "Boolean",
      descr: "Calls to [`createUser`](#accounts_createuser) from the client will be rejected. In addition, if you are using [accounts-ui](#accountsui), the \"Create account\" link will not be available."
    }
  ]
};

Template.api.accounts_ui_config = {
  id: "accounts_ui_config",
  name: "Accounts.ui.config(options)",
  locus: "Client",
  descr: ["Configure the behavior of [`{{loginButtons}}`](#accountsui)."],
  options: [
    {
      name: "requestPermissions",
      type: "Object",
      descr: "Which [permissions](#requestpermissions) to request from the user for each external service."
    },
    {
      name: "requestOfflineToken",
      type: "Object",
      descr: "To ask the user for permission to act on their behalf when offline, map the relevant external service to `true`. Currently only supported with Google. See [Meteor.loginWithExternalService](#meteor_loginwithexternalservice) for more details."
    },
    {
      name: "passwordSignupFields",
      type: "String",
      descr: "Which fields to display in the user creation form. One of '`USERNAME_AND_EMAIL`', '`USERNAME_AND_OPTIONAL_EMAIL`', '`USERNAME_ONLY`', or '`EMAIL_ONLY`' (default)."
    }
  ]
};

Template.api.accounts_validateNewUser = {
  id: "accounts_validatenewuser",
  name: "Accounts.validateNewUser(func)",
  locus: "Server",
  descr: ["Set restrictions on new user creation."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "Called whenever a new user is created. Takes the new user object, and returns true to allow the creation or false to abort."
    }
  ]
};

Template.api.accounts_onCreateUser = {
  id: "accounts_oncreateuser",
  name: "Accounts.onCreateUser(func)",
  locus: "Server",
  descr: ["Customize new user creation."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "Called whenever a new user is created. Return the new user object, or throw an `Error` to abort the creation."
    }
  ]
};



Template.api.accounts_createUser = {
  id: "accounts_createuser",
  name: "Accounts.createUser(options, [callback])",
  locus: "Anywhere",
  descr: ["Create a new user."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Client only, optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ],
  options: [
    {
      name: "username",
      type: "String",
      descr: "A unique name for this user."
    },
    {
      name: "email",
      type: "String",
      descr: "The user's email address."
    },
    {
      name: "password",
      type: "String",
      descr: "The user's password. This is __not__ sent in plain text over the wire."
    },
    {
      name: "profile",
      type: "Object",
      descr: "The user's profile, typically including the `name` field."
    }
  ]
};

Template.api.accounts_changePassword = {
  id: "accounts_changepassword",
  name: "Accounts.changePassword(oldPassword, newPassword, [callback])",
  locus: "Client",
  descr: ["Change the current user's password. Must be logged in."],
  args: [
    {
      name: "oldPassword",
      type: "String",
      descr: "The user's current password. This is __not__ sent in plain text over the wire."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "A new password for the user. This is __not__ sent in plain text over the wire."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ]
};

Template.api.accounts_forgotPassword = {
  id: "accounts_forgotpassword",
  name: "Accounts.forgotPassword(options, [callback])",
  locus: "Client",
  descr: ["Request a forgot password email."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ],
  options: [
    {
      name: "email",
      type: "String",
      descr: "The email address to send a password reset link."
    }
  ]
};

Template.api.accounts_resetPassword = {
  id: "accounts_resetpassword",
  name: "Accounts.resetPassword(token, newPassword, [callback])",
  locus: "Client",
  descr: ["Reset the password for a user using a token received in email. Logs the user in afterwards."],
  args: [
    {
      name: "token",
      type: "String",
      descr: "The token retrieved from the reset password URL."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "A new password for the user. This is __not__ sent in plain text over the wire."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ],
};

Template.api.accounts_setPassword = {
  id: "accounts_setpassword",
  name: "Accounts.setPassword(userId, newPassword)",
  locus: "Server",
  descr: ["Forcibly change the password for a user."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "The id of the user to update."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "A new password for the user."
    }
  ]
};

Template.api.accounts_verifyEmail = {
  id: "accounts_verifyemail",
  name: "Accounts.verifyEmail(token, [callback])",
  locus: "Client",
  descr: ["Marks the user's email address as verified. Logs the user in afterwards."],
  args: [
    {
      name: "token",
      type: "String",
      descr: "The token retrieved from the verification URL."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ]
};


Template.api.accounts_sendResetPasswordEmail = {
  id: "accounts_sendresetpasswordemail",
  name: "Accounts.sendResetPasswordEmail(userId, [email])",
  locus: "Server",
  descr: ["Send an email with a link the user can use to reset their password."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "The id of the user to send email to."
    },
    {
      name: "email",
      type: "String",
      descr: "Optional. Which address of the user's to send the email to. This address must be in the user's `emails` list. Defaults to the first email in the list."
    }
  ]
};

Template.api.accounts_sendEnrollmentEmail = {
  id: "accounts_sendenrollmentemail",
  name: "Accounts.sendEnrollmentEmail(userId, [email])",
  locus: "Server",
  descr: ["Send an email with a link the user can use to set their initial password."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "The id of the user to send email to."
    },
    {
      name: "email",
      type: "String",
      descr: "Optional. Which address of the user's to send the email to. This address must be in the user's `emails` list. Defaults to the first email in the list."
    }
  ]
};

Template.api.accounts_sendVerificationEmail = {
  id: "accounts_sendverificationemail",
  name: "Accounts.sendVerificationEmail(userId, [email])",
  locus: "Server",
  descr: ["Send an email with a link the user can use verify their email address."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "The id of the user to send email to."
    },
    {
      name: "email",
      type: "String",
      descr: "Optional. Which address of the user's to send the email to. This address must be in the user's `emails` list. Defaults to the first unverified email in the list."
    }
  ]
};



Template.api.accounts_emailTemplates = {
  id: "accounts_emailtemplates",
  name: "Accounts.emailTemplates",
  locus: "Anywhere",
  descr: ["Options to customize emails sent from the Accounts system."]
};



Template.api.setTimeout = {
  id: "meteor_settimeout",
  name: "Meteor.setTimeout(func, delay)",
  locus: "Anywhere",
  descr: ["Call a function in the future after waiting for a specified delay."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "The function to run"
    },
    {
      name: "delay",
      type: "Number",
      descr: "Number of milliseconds to wait before calling function"
    }
  ]
};

Template.api.setInterval = {
  id: "meteor_setinterval",
  name: "Meteor.setInterval(func, delay)",
  locus: "Anywhere",
  descr: ["Call a function repeatedly, with a time delay between calls."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "The function to run"
    },
    {
      name: "delay",
      type: "Number",
      descr: "Number of milliseconds to wait between each function call."
    }
  ]
};

Template.api.clearTimeout = {
  id: "meteor_cleartimeout",
  name: "Meteor.clearTimeout(id)",
  locus: "Anywhere",
  descr: ["Cancel a function call scheduled by `Meteor.setTimeout`."],
  args: [
    {
      name: "id",
      type: "Number",
      descr: "The handle returned by `Meteor.setTimeout`"
    }
  ]
};

Template.api.clearInterval = {
  id: "meteor_clearinterval",
  name: "Meteor.clearInterval(id)",
  locus: "Anywhere",
  descr: ["Cancel a repeating function call scheduled by `Meteor.setInterval`."],
  args: [
    {
      name: "id",
      type: "Number",
      descr: "The handle returned by `Meteor.setInterval`"
    }
  ]
};

Template.api.EnvironmentVariable = {
  id: "meteor_environmentvariable",
  name: "new Meteor.EnvironmentVariable()",
  locus: "Anywhere",
  descr: ["Construct a Meteor environment variable."]
};

Template.api.environmentVariable_get = {
  id: "env_var_get",
  name: "<i>env_var</i>.get()",
  locus: "Anywhere",
  descr: ["Return the current value of an EnvironmentVariable."]
};

Template.api.environmentVariable_withValue = {
  id: "env_var_withvalue",
  name: "<i>env_var</i>.withValue(value, func)",
  locus: "Anywhere",
  descr: ["Run `func` with the `env_var`'s value set to `value`."],
  args: [
    {name: "value",
     type: "Anything",
     descr: "Desired value of the environment variable."},
    {name: "func",
     type: "Function",
     descr: "Function to call"}
  ]
};

Template.api.bindEnvironment = {
  id: "env_var_bindenvironment",
  name: "<i>env_var</i>.bindEnvironment(func, onException, _this)",
  locus: "Anywhere",
  descr: ["Return a new function that calls `func` with `this` set to `_this`, and with environment variables set to their current values."],
  args: [
    {name: "func",
     type: "Function",
     descr: "Function to wrap"},
    {name: "onException",
     type: "Function",
     descr: "Function to call if `func` throws an exception.  It expects the thrown exception as its single argument."},
    {name: "_this",
     type: "Object",
     descr: "Value of `this` inside `func`."}
  ]
};

Template.api.set = {
  id: "session_set",
  name: "Session.set(key, value)",
  locus: "Client",
  descr: ["Set a variable in the session. Notify any listeners that the value has changed (eg: redraw templates, and rerun any [`Deps.autorun`](#deps_autorun) computations, that called [`Session.get`](#session_get) on this `key`.)"],
  args: [
    {name: "key",
     type: "String",
     descr: "The key to set, eg, `selectedItem`"},
    {name: "value",
     type: "EJSON-able object or undefined",
     descr: "The new value for `key`"}
  ]
};

Template.api.setDefault = {
  id: "session_set_default",
  name: "Session.setDefault(key, value)",
  locus: "Client",
  descr: ["Set a variable in the session if it is undefined. Otherwise works exactly the same as [`Session.set`](#session_set)."],
  args: [
    {name: "key",
     type: "String",
     descr: "The key to set, eg, `selectedItem`"},
    {name: "value",
     type: "EJSON-able object or undefined",
     descr: "The new value for `key`"}
  ]
};

Template.api.get = {
  id: "session_get",
  name: "Session.get(key)",
  locus: "Client",
  descr: ["Get the value of a session variable. If inside a [reactive computation](#reactivity), invalidate the computation the next time the value of the variable is changed by [`Session.set`](#session_set). This returns a clone of the session value, so if it's an object or an array, mutating the returned value has no effect on the value stored in the session."],
  args: [
    {name: "key",
     type: "String",
     descr: "The name of the session variable to return"}
  ]
};

Template.api.equals = {
  id: "session_equals",
  name: "Session.equals(key, value)",
  locus: "Client",
  descr: ["Test if a session variable is equal to a value. If inside a [reactive computation](#reactivity), invalidate the computation the next time the variable changes to or from the value."],
  args: [
    {name: "key",
     type: "String",
     descr: "The name of the session variable to test"},
    {name: "value",
     type: "String, Number, Boolean, null, or undefined",
     descr: "The value to test against"}
  ]
};

Template.api.httpcall = {
  id: "meteor_http_call",
  name: "Meteor.http.call(method, url [, options] [, asyncCallback])",
  locus: "Anywhere",
  descr: ["Perform an outbound HTTP request."],
  args: [
    {name: "method",
     type: "String",
     descr: 'The HTTP method to use: "`GET`", "`POST`", "`PUT`", or "`DELETE`".'},
    {name: "url",
     type: "String",
     descr: 'The URL to retrieve.'},
    {name: "asyncCallback",
     type: "Function",
     descr: "Optional callback.  If passed, the method runs asynchronously, instead of synchronously, and calls asyncCallback.  On the client, this callback is required."
    }
  ],
  options: [
    {name: "content",
     type: "String",
     descr: "String to use as the HTTP request body."
},
    {name: "data",
     type: "Object",
     descr: "JSON-able object to stringify and use as the HTTP request body. Overwrites `content`."},
    {name: "query",
     type: "String",
     descr: "Query string to go in the URL. Overwrites any query string in `url`."},
    {name: "params",
     type: "Object",
     descr: "Dictionary of request parameters to be encoded and placed in the URL (for GETs) or request body (for POSTs).  If `content` or `data` is specified, `params` will always be placed in the URL."
    },
    {name: "auth",
     type: "String",
     descr: 'HTTP basic authentication string of the form `"username:password"`'},
    {name: "headers",
     type: "Object",
     descr: "Dictionary of strings, headers to add to the HTTP request."},
    {name: "timeout",
     type: "Number",
     descr: "Maximum time in milliseconds to wait for the request before failing.  There is no timeout by default."},
    {name: "followRedirects",
     type: "Boolean",
     descr: "If true, transparently follow HTTP redirects.  Cannot be set to false on the client."}
  ]
};

Template.api.http_get = {
  id: "meteor_http_get",
  name: "Meteor.http.get(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["Send an HTTP GET request.  Equivalent to `Meteor.http.call(\"GET\", ...)`."]
};

Template.api.http_post = {
  id: "meteor_http_post",
  name: "Meteor.http.post(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["Send an HTTP POST request.  Equivalent to `Meteor.http.call(\"POST\", ...)`."]
};

Template.api.http_put = {
  id: "meteor_http_put",
  name: "Meteor.http.put(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["Send an HTTP PUT request.  Equivalent to `Meteor.http.call(\"PUT\", ...)`."]
};

Template.api.http_del = {
  id: "meteor_http_del",
  name: "Meteor.http.del(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["Send an HTTP DELETE request.  Equivalent to `Meteor.http.call(\"DELETE\", ...)`.  (Named `del` to avoid conflict with JavaScript's `delete`.)"]
};


// XXX move these up to right place
Template.api.template_call = {
  id: "template_call",
  name: "Template.<em>myTemplate</em>([data])",
  locus: "Client",
  descr: ["Call a template function by name to produce HTML."],
  args: [
    {name: "data",
     type: "Object",
     descr: 'Optional. The data context object with which to call the template.'}
  ]
};

Template.api.template_rendered = {
  id: "template_rendered",
  name: "Template.<em>myTemplate</em>.rendered = function ( ) { ... }",
  locus: "Client",
  descr: ["Provide a callback when an instance of a template is rendered."]
};

Template.api.template_created = {
  id: "template_created",
  name: "Template.<em>myTemplate</em>.created = function ( ) { ... }",
  locus: "Client",
  descr: ["Provide a callback when an instance of a template is created."]
};

Template.api.template_destroyed = {
  id: "template_destroyed",
  name: "Template.<em>myTemplate</em>.destroyed = function ( ) { ... }",
  locus: "Client",
  descr: ["Provide a callback when an instance of a template is destroyed."]
};

Template.api.template_events = {
  id: "template_events",
  name: "Template.<em>myTemplate</em>.events(eventMap)",
  locus: "Client",
  descr: ["Specify event handlers for this template."],
  args: [
    {name: "eventMap",
     type: "Event map",
     type_link: "eventmaps",
     descr: "Event handlers to associate with this template."}
  ]
};

Template.api.template_helpers = {
  id: "template_helpers",
  name: "Template.<em>myTemplate</em>.helpers(helpers)",
  locus: "Client",
  descr: ["Specify template helpers available to this template."],
  args: [
    {name: "helpers",
     type: "Object",
     descr: "Dictionary of helper functions by name."}
  ]
};

Template.api.template_preserve = {
  id: "template_preserve",
  name: "Template.<em>myTemplate</em>.preserve(selectors)",
  locus: "Client",
  descr: ["Specify rules for preserving individual DOM elements on re-render."],
  args: [
    {name: "selectors",
     type: "Array or Object",
     descr: "Array of CSS selectors that each match at most one element, such as `['.thing1', '.thing2']`, or, alternatively, a dictionary of selectors and node-labeling functions (see below)."}
  ]
};

Template.api.template_findAll = {
  id: "template_findAll",
  name: "<em>this</em>.findAll(selector)",
  locus: "Client",
  descr: ["Find all elements matching `selector` in this template instance."],
  args: [
    {name: "selector",
     type: "String",
     descr: 'The CSS selector to match, scoped to the template contents.'}
  ]
};

Template.api.template_find = {
  id: "template_find",
  name: "<em>this</em>.find(selector)",
  locus: "Client",
  descr: ["Find one element matching `selector` in this template instance."],
  args: [
    {name: "selector",
     type: "String",
     descr: 'The CSS selector to match, scoped to the template contents.'}
  ]
};

Template.api.template_firstNode = {
  id: "template_firstNode",
  name: "<em>this</em>.firstNode",
  locus: "Client",
  descr: ["The first top-level DOM node in this template instance."]
};

Template.api.template_lastNode = {
  id: "template_lastNode",
  name: "<em>this</em>.lastNode",
  locus: "Client",
  descr: ["The last top-level DOM node in this template instance."]
};

Template.api.template_data = {
  id: "template_data",
  name: "<em>this</em>.data",
  locus: "Client",
  descr: ["The data context of this instance's latest invocation."]
};

var rfc = function (descr) {
  return '[RFC5322](http://tools.ietf.org/html/rfc5322) ' + descr;
};

Template.api.email_send = {
  id: "email_send",
  name: "Email.send(options)",
  locus: "Server",
  descr: ["Send an email. Throws an `Error` on failure to contact mail " +
          "server or if mail server returns an error."],
  options: [
    {name: "from",
     type: "String",
     descr: rfc('"From:" address (required)')
    },
    {name: "to",
     type: "String or Array of strings",
     descr: rfc('"To:" address[es]')
    },
    {name: "cc",
     type: "String or Array of strings",
     descr: rfc('"Cc:" address[es]')
    },
    {name: "bcc",
     type: "String or Array of strings",
     descr: rfc('"Bcc:" address[es]')
    },
    {name: "replyTo",
     type: "String or Array of strings",
     descr: rfc('"Reply-To:" address[es]')
    },
    {name: "subject",
     type: "String",
     descr: rfc('"Subject:" line')
    },
    {name: "text",
     type: "String",
     descr: rfc('mail body (plain text)')
    },
    {name: "html",
     type: "String",
     descr: rfc('mail body (HTML)')
    }
  ]
};
