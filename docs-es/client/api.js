Template.api.isClient = {
  id: "meteor_isclient",
  name: "Meteor.isClient",
  locus: "Anywhere",
  descr: ["Boolean variable.  True si se ejecuta en entorno cliente."]
};

Template.api.isServer = {
  id: "meteor_isserver",
  name: "Meteor.isServer",
  locus: "Anywhere",
  descr: ["Boolean variable.  True si se ejecuta en entorno cliente."]
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
  descr: ["`Meteor.settings` contiene las opciones específicas de implementación que fueron " +
          "proporcionadas utilizando la opción `--settings` para `meteor run` o `meteor deploy`. " +
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
  args: [ {name: "val", type: "EJSON-compatible value", descr: "Un valor para serializar a JSON plano."} ],
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
  descr: ["Retorna una copia en profundidad de `val`."]
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
  args: [ {name: "other", type: "object", descr: "Otro objeto para comparar esto."}],
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
  descr: ["Llama dentro de la función de publicaciónn.  Informa al suscriptor que un documento ha sido añadido al conjunto de registros."],
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
     descr: "Los campos del documento que han cambiado, junto a sus nuevos valores. Si un campo no está presente en `fields`  se deja sin cambiar; si está presente en `fields` y tiene un valor de `undefined` se elimina del documento. Si `_id` está presente se ignora."
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
  descr: ["Llama dentro de la función de publicación. Detiene la suscripción de este cliente; el callback `onError` *no* es invocado en el cliente."]
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
  descr: ["Accede dentro de la función de publicación. El id del usuario conectado, o `null` si ningún usuario está conectado."]
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
     descr: "(Sólo cliente) Si es true, no tenía este método hasta que todos las llamadas a métodos anteriores han concluido, y no envíe las llamadas a métodos siguientes hasta que se complete esta."},
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
  descr: ["Modifica uno o más documentos en la colección"],
  args: [
    {name: "selector",
     type: "Mongo selector, or object id",
     type_link: "selectors",
     descr: "Especifica que documentos modificar"},
    {name: "modifier",
     type: "Mongo modifier",
     type_link: "modifiers",
     descr: "Especifica como modificar los documentos"},
    {name: "callback",
     type: "Function",
     descr: "Opcional.  Si está presente, se llama con un objeto de error como argumento."}
  ],
  options: [
    {name: "multi",
     type: "Boolean",
     descr: "True se modifican todos los documentos coincidentes; false sólo se  modifica uno de los documentos coincidentes (el por defecto)."}
  ]
};

Template.api.remove = {
  id: "remove",
  name: "<em>collection</em>.remove(selector, [callback])",
  locus: "Anywhere",
  descr: ["Eliminar los documentos de la colección"],
  args: [
    {name: "selector",
     type: "Mongo selector, or object id",
     type_link: "selectors",
     descr: "Especifica que documentos eliminar"},
    {name: "callback",
     type: "Function",
     descr: "Opcional.  Si está presente,  se llama con un objeto error como argumento."}
  ]
};

Template.api.allow = {
  id: "allow",
  name: "<em>collection</em>.allow(options)",
  locus: "Server",
  descr: ["Permite a los usuarios escribir directamente en esta colección desde código de cliente, sujeto a las limitaciones que usted defina."],
  options: [
    {name: "insert, update, remove",
     type: "Function",
     descr: "Funciones que se parecen a una propuesta de modificación de la base de datos y devuelven true si se debe permitir."},
    {name: "fetch",
     type: "Array of String",
     descr: "Opcional, mejora del rendimiento. Limita los campos que se obtienen de la base de datos para inspeccionar con sus funciones `update` y `remove`."},
    {name: "transform",
     type: "Function",
     descr: "Invalida `transform` en la  [`Collection`](#collections).  Pasa `null` para desactivar transformaciones."}
  ]
};

Template.api.deny = {
  id: "deny",
  name: "<em>collection</em>.deny(options)",
  locus: "Server",
  descr: ["Invalida reglas `allow`."],
  options: [
    {name: "insert, update, remove",
     type: "Function",
     descr: "Funciones que buscan en una propuesta de modificación de la base de datos y devuelven true si se le debe negar, incluso si una regla `allow` dice lo contrario."},
    {name: "fetch",
     type: "Array of Strings",
     descr: "Opcional, mejora del rendimiento. Limita los campos que se obtienen de la base de datos para la inspección por sus funciones `update` y `remove`."},
    {name: "transform",
     type: "Function",
     descr:  "Invalida `transform` en la  [`Collection`](#collections).  Pasa `null` para desactivar transformaciones."}
  ]
};


Template.api.cursor_count = {
  id: "count",
  name: "<em>cursor</em>.count()",
  locus: "Anywhere",
  descr: ["Devuelve el número de documentos que coinciden con una consulta."]
};

Template.api.cursor_fetch = {
  id: "fetch",
  name: "<em>cursor</em>.fetch()",
  locus: "Anywhere",
  descr: ["Devuelve todos los documentos que coinciden en como un Array."]
};

Template.api.cursor_foreach = {
  id: "foreach",
  name: "<em>cursor</em>.forEach(callback)",
  locus: "Anywhere",
  descr: ["Llama `callback` una vez para cada documento coincidente, secuencialmente y sincrónicamente."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Función a llamar."}
  ]
};

Template.api.cursor_map = {
  id: "map",
  name: "<em>cursor</em>.map(callback)",
  locus: "Anywhere",
  descr: ["Mapea callback sobre todos los documentos coincidentes.  Retorna un Array."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Función a llamar."}
  ]
};

Template.api.cursor_rewind = {
  id: "rewind",
  name: "<em>cursor</em>.rewind()",
  locus: "Anywhere",
  descr: ["Restablece el cursor consulta."],
  args: [ ]
};

Template.api.cursor_observe = {
  id: "observe",
  name: "<em>cursor</em>.observe(callbacks)",
  locus: "Anywhere",
  descr: ["Ver consulta.  Recibe callbacks como el conjunto de resultados con cambios."],
  args: [
    {name: "callbacks",
     type: "Object",
     descr: "Funciones a llamar para proporcionar el conjunto de resultados con cambios"}
  ]
};

Template.api.cursor_observe_changes = {
  id: "observe_changes",
  name: "<em>cursor</em>.observeChanges(callbacks)",
  locus: "Anywhere",
  descr: ["Ver una consulta.  Recibe callbacks como el conjunto de resultados con cambios. Sólo se pasan las diferencias entre los antiguos y los nuevos documentos a los callbacks."],
  args: [
    {name: "callbacks",
     type: "Object",
     descr: "Funciones a llamar para proporcionar el conjunto de resultados a medida que cambia"}
  ]
};

Template.api.id = {
  id: "meteor_id",
  name: "Random.id()",
  locus: "Anywhere",
  descr: ["Devuelve un identificador único."],
  args: [ ]
};

Template.api.collection_object_id = {
  id: "collection_object_id",
  name: "new Meteor.Collection.ObjectID(hexString)",
  locus: "Anywhere",
  descr: ["Crea un `ObjectID` Mongo-style.  Si usted no especifica un `hexString`, el `ObjectID` será generado aleatoriamente (no usando las reglas de construcción de ID de MongoDB)."],
  args: [ {
    name: "hexString",
    type: "String",
    descr: ["Opcional. El contenido hexadecimal de 24 caracteres  para crear los ObjectID"]
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
  descr: ["Ejecuta una función ahora y la re-ejecuta después cuando sus dependencias cambien. Devuelve un objeto Computation que se puede utilizar para detener u observar la reejecución."],
  args: [
    {name: "runFunc",
     type: "Function",
     descr: "La función a ejecutar. Recibe un argumento: el objeto Computation object que será devuelto."}
  ]
};

Template.api.deps_flush = {
  id: "deps_flush",
  name: "Deps.flush()",
  locus: "Client",
  descr: ["Procesa todas las actualizaciones reactivas inmediatamente y garantiza que todos los cómputos invalidados son reejecutados."]
};

Template.api.deps_nonreactive = {
  id: "deps_nonreactive",
  name: "Deps.nonreactive(func)",
  locus: "Client",
  descr: ["Ejecutar una función sin seguimiento de dependencias."],
  args: [
    {name: "func",
     type: "Function",
     descr: "Una función para llamar inmediatamente."}
  ]
};

Template.api.deps_active = {
  id: "deps_active",
  name: "Deps.active",
  locus: "Client",
  descr: ["True si hay un cómputo actual, lo que significa que a las dependencias de las fuentes de datos reactivas se les realizará un seguimiento y potencialmente causará que la computación actual se re-ejecute."]
};

Template.api.deps_currentcomputation = {
  id: "deps_currentcomputation",
  name: "Deps.currentComputation",
  locus: "Client",
  descr: ["La computación actual, o `null` si no hay ninguno.  La computación actual es el objeto [`Deps.Computation`](#deps_computation) creado por la llamada activa más interna a `Deps.autorun`, y es la computación que gana dependencias cuando fuentes de datos reactivas son accedidas."]
};

Template.api.deps_oninvalidate = {
  id: "deps_oninvalidate",
  name: "Deps.onInvalidate(callback)",
  locus: "Client",
  descr: ["Registra una nueva callback [`onInvalidate`](#computation_oninvalidate) en la computación actual (que debe existir), para ser llamado inmediatamente cuando la computación actual se invalida o se detiene."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Una función callback  que se invoca como `func(c)`, donde `c` es la computación en la que se registra el callback."}
  ]
};

Template.api.deps_afterflush = {
  id: "deps_afterflush",
  name: "Deps.afterFlush(callback)",
  locus: "Client",
  descr: ["Programa una función que será llamada durante el siguiente flush, limpieza, o después en el flush actual si alguno está en curso, después de que todos los cómputos invalidados hayan sido reejecutados.  La función se ejecutará una vez y no en oleadas sucesivas a menos que `afterFlush` se llame de nuevo."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Una función para llamar en tiempo de limpieza."}
  ]
};

Template.api.computation_stop = {
  id: "computation_stop",
  name: "<em>computation</em>.stop()",
  locus: "Client",
  descr: ["Impide que este cómputo se reejecute."]
};

Template.api.computation_invalidate = {
  id: "computation_invalidate",
  name: "<em>computation</em>.invalidate()",
  locus: "Client",
  descr: ["Invalida a este cómputo para que se vuelva a reejecutar."]
};

Template.api.computation_oninvalidate = {
  id: "computation_oninvalidate",
  name: "<em>computation</em>.onInvalidate(callback)",
  locus: "Client",
  descr: ["Registra `callback` para ejecutarse cuando este cómputo está próximo a ser invalidado, o se ejecuta de inmediato si la computación ya haya quedado invalidada. El callback se ejecuta una sola vez y no en el futuro a menos que se llamen invalidaciones `onInvalidate` otra vez después de que la computación vuelva a ser válida."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Función a ser llamada para invalidación. Recibe un argumento, la computación que fue invalidada."}
  ]
};

Template.api.computation_stopped = {
  id: "computation_stopped",
  name: "<em>computation</em>.stopped",
  locus: "Client",
  descr: ["True si esta computación ha sido detenida."]
};

Template.api.computation_invalidated = {
  id: "computation_invalidated",
  name: "<em>computation</em>.invalidated",
  locus: "Client",
  descr: ["True si esta computación ha sido invalidada (y aún no reejecutada), o si ha sido detenida."]
};

Template.api.computation_firstrun = {
  id: "computation_firstrun",
  name: "<em>computation</em>.firstRun",
  locus: "Client",
  descr: ["True durante la ejecución inicial de la computación en el momento que es llamado `Deps.autorun`, y false en las reejecuciones posteriores y en otros momentos."]
};

Template.api.dependency_changed = {
  id: "dependency_changed",
  name: "<em>dependency</em>.changed()",
  locus: "Client",
  descr: ["Invalida todas lo cómputos dependientes immediatamente y los elimina como dependientes."]
};

Template.api.dependency_depend = {
  id: "dependency_depend",
  name: "<em>dependency</em>.depend([fromComputation])",
  locus: "Client",
  descr: ["Declara que la computación actual (o `fromComputation` si se da) depende de `dependency`. La computación será invalidada la próxima vez que `dependency` cambie.", "Si no hay una computación actual y `depend()` es llamada sin argumentos, no hace nada y devuelve false.", "Devuelve true  si la computación es de nuevo dependiente de `dependency` en vez de uno existente."],
  args: [
    {name: "fromComputation",
     type: "Deps.Computation",
     descr: "Una computación opcional declarada como dependiente de `dependency` en lugar de la computación actual."}
  ]
};

Template.api.dependency_hasdependents = {
  id: "dependency_hasdependents",
  name: "<em>dependency</em>.hasDependents()",
  locus: "Client",
  descr: ["True si esta Dependency tiene una o más Computations dependientes, que sería invalidada si esta Dependency fuera a cambiar."]
};

//////

// writeFence
// invalidationCrossbar

Template.api.render = {
  id: "meteor_render",
  name: "Meteor.render(htmlFunc)",
  locus: "Client",
  descr: ["Crea nodos DOM que se actualizan automaticamente ellos mismos cuando los datos cambian."],
  args: [
    {name: "htmlFunc",
     type: "Function returning a string of HTML",
     descr: "Función que genera HTML para ser visualizado.  Llamado inmediatamente y re-ejecutado cada vez que los datos cambien.  También puede ser una cadena de HTML en lugar de una función."}
  ]
};

Template.api.renderList = {
  id: "meteor_renderlist",
  name: "Meteor.renderList(observable, docFunc, [elseFunc])",
  locus: "Client",
  descr: ["Crea nodos DOM que se actualizan automaticamente ellos mismos basandose en los resultados de una consulta de base de datos."],
  args: [
    {name: "observable",
     type: "Cursor",
     type_link: "meteor_collection_cursor",
     descr: "Cursor de consulta para observar como una una fuente reactiva de los documentos solicitados."},
    {name: "docFunc",
     type: "Function taking a document and returning HTML",
     descr: "Función Render para ser invocada por cada documento."},
    {name: "elseFunc",
     type: "Function returning HTML",
     descr: "Opcional. Función Render para ser invocada cuando la consulta está vacía."}
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
  descr: ["Obtiene el registro del usuario actual, o `null` si ningún usuario ha iniciado sesión. Una fuente de datos reactiva."]
};

Template.api.currentUser = {
  id: "template_currentuser",
  name: "{{currentUser}}",
  locus: "Handlebars templates",
  descr: ["Llama [Meteor.user()](#meteor_user). Utilice `{{#if currentUser}}` para comprobar si el usuario está conectado."]
};

Template.api.userId = {
  id: "meteor_userid",
  name: "Meteor.userId()",
  locus: "Anywhere but publish functions",
  descr: ["Obtiene el id del usuario actual, o `null` si ningún usuario ha iniciado sesión. Una fuente de datos reactiva."]
};


Template.api.users = {
  id: "meteor_users",
  name: "Meteor.users",
  locus: "Anywhere",
  descr: ["Una [Meteor.Collection](#collections) que contiene los documentos de usuario."]
};

Template.api.loggingIn = {
  id: "meteor_loggingin",
  name: "Meteor.loggingIn()",
  locus: "Client",
  descr: ["True si un método de login (tal como `Meteor.loginWithPassword`, `Meteor.loginWithFacebook`, o `Accounts.createUser`) se encuentra actualmente en curso. Una fuente de datos reactiva."]
};

Template.api.loggingInTemplate = {
  id: "template_loggingin",
  name: "{{loggingIn}}",
  locus: "Handlebars templates",
  descr: ["Llama [Meteor.loggingIn()](#meteor_loggingin)."]
};



Template.api.logout = {
  id: "meteor_logout",
  name: "Meteor.logout([callback])",
  locus: "Client",
  descr: ["Finalizar la sesión del usuario."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Opcional callback. Se llama sin argumentos en caso de éxito, o con un solo argumento `Error` en caso de fracaso."
    }
  ]
};


Template.api.loginWithPassword = {
  id: "meteor_loginwithpassword",
  name: "Meteor.loginWithPassword(user, password, [callback])",
  locus: "Client",
  descr: ["Iniciar sesión al usuario con una contraseña."],
  args: [
    {
      name: "user",
      type: "Object or String",
      descr: "Ya sea un string interpretado como un username o un email; o un objeto con una sola clave: `email`, `username` or `id`."
    },
    {
      name: "password",
      type: "String",
      descr: "El password de usuario. Este __no__ es enviado en texto plano a través de la red &mdash; es asegurado con [SRP](http://en.wikipedia.org/wiki/Secure_Remote_Password_protocol)."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Opcional callback. Se llama sin argumentos en caso de éxito, o con un solo argumento `Error` en caso de fracaso."
    }
  ]
};


Template.api.loginWithExternalService = {
  id: "meteor_loginwithexternalservice",
  name: "Meteor.loginWith<i>ExternalService</i>([options], [callback])",
  locus: "Client",
  descr: ["Iniciar sesión al usuario utilizando un servicio externo."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Opcional callback. Se llama sin argumentos en caso de éxito, o con un solo argumento `Error` en caso de fracaso."
    }
  ],
  options: [
    {
      name: "requestPermissions",
      type: "Array of Strings",
      descr: "Una lista de los permisos para solicitar al usuario."
    },
    {
      name: "requestOfflineToken",
      type: "Boolean",
      descr: "Si es true, pide al usuario permiso para actuar en su nombre cuando está offline. Esto almacena un adicional token offline en el campo `services` del documento del usuario. Actualmente sólo es compatible con Google."
    }
  ]
};



Template.api.accounts_config = {
  id: "accounts_config",
  name: "Accounts.config(options)",
  locus: "Anywhere",
  descr: ["Configura las opciones globales de las cuentas."],
  options: [
    {
      name: "sendVerificationEmail",
      type: "Boolean",
      descr: "Los nuevos usuarios con una dirección de correo electrónico recibirán un correo electrónico de verificación de direcciones."
    },
    {
      name: "forbidClientAccountCreation",
      type: "Boolean",
      descr: "Llama a [`createUser`](#accounts_createuser) desde el cliente que ha sido rechazado. Además, si usted está utilizando [accounts-ui](#accountsui), el enlace \"Create account\"  no estarán disponibles."
    }
  ]
};

Template.api.accounts_ui_config = {
  id: "accounts_ui_config",
  name: "Accounts.ui.config(options)",
  locus: "Client",
  descr: ["Configura el comportamiento de [`{{loginButtons}}`](#accountsui)."],
  options: [
    {
      name: "requestPermissions",
      type: "Object",
      descr: "Que [permissions](#requestpermissions) solicitar al usuario para cada servicio externo."
    },
    {
      name: "requestOfflineToken",
      type: "Object",
      descr: "Para solicitar al usuario permiso para actuar en su nombre cundo esté offline, asignar el servicio externo relevante a `true`. Actualmente sólo es compatible con Google. Vease [Meteor.loginWithExternalService](#meteor_loginwithexternalservice)  para más detalles."
    },
    {
      name: "passwordSignupFields",
      type: "String",
      descr: "Qué campos mostrar en el formulario de creación de usuario. Uno de '`USERNAME_AND_EMAIL`', '`USERNAME_AND_OPTIONAL_EMAIL`', '`USERNAME_ONLY`', o '`EMAIL_ONLY`' (por defecto)."
    }
  ]
};

Template.api.accounts_validateNewUser = {
  id: "accounts_validatenewuser",
  name: "Accounts.validateNewUser(func)",
  locus: "Server",
  descr: ["Establece restricciones en la creación de nuevos usuarios."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "Se llama cuando se crea un nuevo usuario. Toma el nuevo objeto de usuario y devuelve true para permitir la creación o false para abortar."
    }
  ]
};

Template.api.accounts_onCreateUser = {
  id: "accounts_oncreateuser",
  name: "Accounts.onCreateUser(func)",
  locus: "Server",
  descr: ["Personalizar la nueva creación de usuario."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "Se llama cuando se crea un nuevo usuario. Devuelve el nuevo objeto de usuario, o lanzar un `Error` para abortar la creación."
    }
  ]
};



Template.api.accounts_createUser = {
  id: "accounts_createuser",
  name: "Accounts.createUser(options, [callback])",
  locus: "Anywhere",
  descr: ["Crear un nuevo usuario."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "sólo cliente, opcional callback. Se llama sin argumentos en caso de éxito, o con un solo argumento  `Error` en caso de fracaso."
    }
  ],
  options: [
    {
      name: "username",
      type: "String",
      descr: "Un nombre único para este usuario."
    },
    {
      name: "email",
      type: "String",
      descr: "La dirección de email del usuario."
    },
    {
      name: "password",
      type: "String",
      descr: "El password del usuario. Este  __no__ es enviado en texto plano por la red."
    },
    {
      name: "profile",
      type: "Object",
      descr: "El perfil de usuario, típicamente incluyendo el campo `name`."
    }
  ]
};

Template.api.accounts_changePassword = {
  id: "accounts_changepassword",
  name: "Accounts.changePassword(oldPassword, newPassword, [callback])",
  locus: "Client",
  descr: ["Cambiar la contraseña del usuario actual. Debe estar registrado."],
  args: [
    {
      name: "oldPassword",
      type: "String",
      descr: "El password actual del usuario . Este  __no__ es enviado en texto plano por la red."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "Un nuevo password para el usuario. Este  __no__ es enviado en texto plano por la red."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Opcional callback. Se llama sin argumentos en caso de éxito, o con un solo argumento `Error` en caso de fracaso."
    }
  ]
};

Template.api.accounts_forgotPassword = {
  id: "accounts_forgotpassword",
  name: "Accounts.forgotPassword(options, [callback])",
  locus: "Client",
  descr: ["Solicitar un password olvidado por email."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Opcional callback. Se llama sin argumentos en caso de éxito, o con un solo argumento `Error` en caso de fracaso."
    }
  ],
  options: [
    {
      name: "email",
      type: "String",
      descr: "La dirección de correo electrónico para enviar un enlace de restablecimiento de password."
    }
  ]
};

Template.api.accounts_resetPassword = {
  id: "accounts_resetpassword",
  name: "Accounts.resetPassword(token, newPassword, [callback])",
  locus: "Client",
  descr: ["Restablecer la contraseña de un usuario mediante una señal recibida en el email. Registra al usuario posteriormente."],
  args: [
    {
      name: "token",
      type: "String",
      descr: "La señal recuperada de la URL de restablecimiento de contraseña."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "Una nueva contraseña para el usuario. Esta __no__ se envia en texto plano por la red."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Opcional callback. Se llama sin argumentos en caso de éxito, o con un solo argumento `Error` en caso de fracaso."
    }
  ],
};

Template.api.accounts_setPassword = {
  id: "accounts_setpassword",
  name: "Accounts.setPassword(userId, newPassword)",
  locus: "Server",
  descr: ["Fuerza de cambiar la password de un usuario."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "El id del usuario para actualizar."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "Una contraseña nueva para el usuario."
    }
  ]
};

Template.api.accounts_verifyEmail = {
  id: "accounts_verifyemail",
  name: "Accounts.verifyEmail(token, [callback])",
  locus: "Client",
  descr: ["Marca la dirección de correo electrónico del usuario como verificado. Registra al usuario posteriormente."],
  args: [
    {
      name: "token",
      type: "String",
      descr: "La señal recuperada de la URL de verificación.."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Opcional callback. Se llama sin argumentos en caso de éxito, o con un solo argumento `Error` en caso de fracaso."
    }
  ]
};


Template.api.accounts_sendResetPasswordEmail = {
  id: "accounts_sendresetpasswordemail",
  name: "Accounts.sendResetPasswordEmail(userId, [email])",
  locus: "Server",
  descr: ["Enviar un e-mail con un enlace, que el usuario puede utilizar para restablecer su  password."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "El id del usuario para enviarle un email."
    },
    {
      name: "email",
      type: "String",
      descr: "Opcional. A Qué dirección del usuario se envia el e-mail. Esta dirección debe estar en la lista de `emails` del usuario. Por defecto  es el primer email in la lista."
    }
  ]
};

Template.api.accounts_sendEnrollmentEmail = {
  id: "accounts_sendenrollmentemail",
  name: "Accounts.sendEnrollmentEmail(userId, [email])",
  locus: "Server",
  descr: ["Enviar un e-mail con un enlace, el usuario puede utilizarlo para establecer la contraseña inicial."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "El id del usuario a enviar el email."
    },
    {
      name: "email",
      type: "String",
      descr: "Opcional. A qué dirección del usuario enviar el email. Esta dirección debe estar en la lista de  `emails` del usuario. Por defecto el primer email de la lista."
    }
  ]
};

Template.api.accounts_sendVerificationEmail = {
  id: "accounts_sendverificationemail",
  name: "Accounts.sendVerificationEmail(userId, [email])",
  locus: "Server",
  descr: ["Enviar un e-mail con un enlace, el usuario puede usar verificar su dirección de correo electrónico."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "El id del usuario a enviar el email."
    },
    {
      name: "email",
      type: "String",
      descr: "Opcional.A qué dirección del usuario enviar el email. Esta dirección debe estar en la lista de `emails` del usuario. Por defecto el primer email de la lista."
    }
  ]
};



Template.api.accounts_emailTemplates = {
  id: "accounts_emailtemplates",
  name: "Accounts.emailTemplates",
  locus: "Anywhere",
  descr: ["Opciones para personalizar los correos electrónicos enviados desde el Accounts system."]
};



Template.api.setTimeout = {
  id: "meteor_settimeout",
  name: "Meteor.setTimeout(func, delay)",
  locus: "Anywhere",
  descr: ["Llamar a una función en el futuro, después de esperar una demora especificada."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "La función a ejecutar"
    },
    {
      name: "delay",
      type: "Number",
      descr: "Número de milisegundos a esperar antes de llamar a la función"
    }
  ]
};

Template.api.setInterval = {
  id: "meteor_setinterval",
  name: "Meteor.setInterval(func, delay)",
  locus: "Anywhere",
  descr: ["Llamar a una función repetidamente, con un intervalo de tiempo entre las llamadas."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "La función a ejecutar"
    },
    {
      name: "delay",
      type: "Number",
      descr: "Número de milisegundos de espera entre cada llamada a la función."
    }
  ]
};

Template.api.clearTimeout = {
  id: "meteor_cleartimeout",
  name: "Meteor.clearTimeout(id)",
  locus: "Anywhere",
  descr: ["Cancelar una llamada a la función programada por `Meteor.setTimeout`."],
  args: [
    {
      name: "id",
      type: "Number",
      descr: "El manejador devuelto por `Meteor.setTimeout`"
    }
  ]
};

Template.api.clearInterval = {
  id: "meteor_clearinterval",
  name: "Meteor.clearInterval(id)",
  locus: "Anywhere",
  descr: ["Cancelar una llamada a la función de repetición programada por `Meteor.setInterval`."],
  args: [
    {
      name: "id",
      type: "Number",
      descr: "El manejador devuelto por `Meteor.setInterval`"
    }
  ]
};

Template.api.EnvironmentVariable = {
  id: "meteor_environmentvariable",
  name: "new Meteor.EnvironmentVariable()",
  locus: "Anywhere",
  descr: ["Crear una variable de entorno de Meteor."]
};

Template.api.environmentVariable_get = {
  id: "env_var_get",
  name: "<i>env_var</i>.get()",
  locus: "Anywhere",
  descr: ["Devuelve el valor actual de EnvironmentVariable."]
};

Template.api.environmentVariable_withValue = {
  id: "env_var_withvalue",
  name: "<i>env_var</i>.withValue(value, func)",
  locus: "Anywhere",
  descr: ["Ejecuta `func`con el valor `env_var`'s establecido a `value`."],
  args: [
    {name: "value",
     type: "Anything",
     descr: "Valor deseado de la variable de entorno."},
    {name: "func",
     type: "Function",
     descr: "Función a llamar"}
  ]
};

Template.api.bindEnvironment = {
  id: "env_var_bindenvironment",
  name: "<i>env_var</i>.bindEnvironment(func, onException, _this)",
  locus: "Anywhere",
  descr: ["Devuelve una nueva función que llama `func` con `this` establecido a `_this`, y con las variables de entorno establecidos a sus valores actuales."],
  args: [
    {name: "func",
     type: "Function",
     descr: "Función para envolver"},
    {name: "onException",
     type: "Function",
     descr: "Función para llamar en caso de que `func` lance una excepción.  Se espera a la excepción lanzada como su único argumento."},
    {name: "_this",
     type: "Object",
     descr: "Valor de `this` dentro de `func`."}
  ]
};

Template.api.set = {
  id: "session_set",
  name: "Session.set(key, value)",
  locus: "Client",
  descr: ["Establecer una variable de sesión. Notificar a los oyentes que el valor ha cambiado (ej: redibujar las plantillas, y volver a ejecutar cualquier computación [`Deps.autorun`](#deps_autorun), que se llama [`Session.get`](#session_get) en esta `key`.)"],
  args: [
    {name: "key",
     type: "String",
     descr: "La clave a establecer, ej, `selectedItem`"},
    {name: "value",
     type: "EJSON-able object or undefined",
     descr: "El nuevo valor para `key`"}
  ]
};

Template.api.setDefault = {
  id: "session_set_default",
  name: "Session.setDefault(key, value)",
  locus: "Client",
  descr: ["Establecer una variable en la sesión si esta es undefined. De lo contrario funciona exactamente igual que [`Session.set`](#session_set)."],
  args: [
    {name: "key",
     type: "String",
     descr: "La clave a establecer, ej, `selectedItem`"},
    {name: "value",
     type: "EJSON-able object or undefined",
     descr: "El nuevo valor para `key`"}
  ]
};

Template.api.get = {
  id: "session_get",
  name: "Session.get(key)",
  locus: "Client",
  descr: ["Obtener el valor de una variable de sesión. Si dentro de un [reactive computation](#reactivity), invalidar la computación de la próxima vez que el valor de la variable se cambia por [`Session.set`](#session_set). Esto devuelve un clon del valor de la sesión, por lo que si se trata de un objeto o un array, mutando el valor devuelto no tiene efecto sobre el valor almacenado en la sesión."],
  args: [
    {name: "key",
     type: "String",
     descr: "El nombre de la variable de sesión a devolver"}
  ]
};

Template.api.equals = {
  id: "session_equals",
  name: "Session.equals(key, value)",
  locus: "Client",
  descr: ["Compruebe si una variable de sesión es igual a un valor. Si dentro de un [reactive computation](#reactivity), invalida la computación la próxima vez la variable cambia a o del valor."],
  args: [
    {name: "key",
     type: "String",
     descr: "El nombre de la variable de sesión por testear"},
    {name: "value",
     type: "String, Number, Boolean, null, or undefined",
     descr: "El valor contra el que se testea"}
  ]
};

Template.api.httpcall = {
  id: "meteor_http_call",
  name: "Meteor.http.call(method, url [, options] [, asyncCallback])",
  locus: "Anywhere",
  descr: ["Realizar una salida HTTP request."],
  args: [
    {name: "method",
     type: "String",
     descr: 'El método HTTP a utilizar: "`GET`", "`POST`", "`PUT`", o "`DELETE`".'},
    {name: "url",
     type: "String",
     descr: 'El URL para recuperar.'},
    {name: "asyncCallback",
     type: "Function",
     descr: "Opcional callback.  Si se aprueba, el método se ejecuta de forma asíncrona, en lugar de forma sincrónica, y llama asyncCallback.  En el cliente, este callback es requerido."
    }
  ],
  options: [
    {name: "content",
     type: "String",
     descr: "String a usar como el cuerpo de la petición HTTP."
},
    {name: "data",
     type: "Object",
     descr: "Objeto JSON-able  a stringify y utiliar como el cuerpo de la petición HTTP. Sobrescribe `content`."},
    {name: "query",
     type: "String",
     descr: "Cadena de consulta para ir en el URL. Sobrescribe cualquier cadena de consulta en `url`."},
    {name: "params",
     type: "Object",
     descr: "Diccionario de los parámetros de la petición que se codifican y se coloca en la URL (para GETs) o en el cuerpo de la petición (para POSTs).  Si `content` o `data` es especificado, `params` siempre va a ser colocado en la URL."
    },
    {name: "auth",
     type: "String",
     descr: 'HTTP cadena básica de autenticación de forma `"username:password"`'},
    {name: "headers",
     type: "Object",
     descr: "Diccionario de strings, cabeceras para añadir a la solicitud HTTP."},
    {name: "timeout",
     type: "Number",
     descr: "Tiempo máximo en milisegundos de espera para la solicitud antes de fallar. Por defecto, No hay tiempo de espera."},
    {name: "followRedirects",
     type: "Boolean",
     descr: "Si true, sigue transparentemente redirecciones HTTP .  No se puede establecer a false en el cliente."}
  ]
};

Template.api.http_get = {
  id: "meteor_http_get",
  name: "Meteor.http.get(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["Envía una solicitud HTTP GET.  Equivalente a `Meteor.http.call(\"GET\", ...)`."]
};

Template.api.http_post = {
  id: "meteor_http_post",
  name: "Meteor.http.post(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["Envía una solicitud HTTP POST.  Equivalente a `Meteor.http.call(\"POST\", ...)`."]
};

Template.api.http_put = {
  id: "meteor_http_put",
  name: "Meteor.http.put(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["Envía una solicitud HTTP PUT.  Equivalente a `Meteor.http.call(\"PUT\", ...)`."]
};

Template.api.http_del = {
  id: "meteor_http_del",
  name: "Meteor.http.del(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["Envía una solicitud HTTP DELETE.  Equivalente a  `Meteor.http.call(\"DELETE\", ...)`.  (Nombrado `del` para evitar conflicto con `delete` de JavaScript.)"]
};


// XXX move these up to right place
Template.api.template_call = {
  id: "template_call",
  name: "Template.<em>myTemplate</em>([data])",
  locus: "Client",
  descr: ["Llamar a una función de plantilla por su nombre para producir HTML."],
  args: [
    {name: "data",
     type: "Object",
     descr: 'Opcional. El objeto contexto de datos con el que llamar a la plantilla.'}
  ]
};

Template.api.template_rendered = {
  id: "template_rendered",
  name: "Template.<em>myTemplate</em>.rendered = function ( ) { ... }",
  locus: "Client",
  descr: ["Proporcionar un callback cuando una instancia de una plantilla es revisualizada."]
};

Template.api.template_created = {
  id: "template_created",
  name: "Template.<em>myTemplate</em>.created = function ( ) { ... }",
  locus: "Client",
  descr: ["Proporciona un callback cuando se crea una instancia de plantilla."]
};

Template.api.template_destroyed = {
  id: "template_destroyed",
  name: "Template.<em>myTemplate</em>.destroyed = function ( ) { ... }",
  locus: "Client",
  descr: ["Proporciona un callback cuando se destruye una instancia de plantilla."]
};

Template.api.template_events = {
  id: "template_events",
  name: "Template.<em>myTemplate</em>.events(eventMap)",
  locus: "Client",
  descr: ["Especifica los controladores de eventos para esta plantilla."],
  args: [
    {name: "eventMap",
     type: "Event map",
     type_link: "eventmaps",
     descr: "Los controladores de eventos para asociar con esta plantilla."}
  ]
};

Template.api.template_helpers = {
  id: "template_helpers",
  name: "Template.<em>myTemplate</em>.helpers(helpers)",
  locus: "Client",
  descr: ["Especifica auxiliares de plantilla disponibles para esta plantilla."],
  args: [
    {name: "helpers",
     type: "Object",
     descr: "Diccionario de funciones auxiliares por nombre."}
  ]
};

Template.api.template_preserve = {
  id: "template_preserve",
  name: "Template.<em>myTemplate</em>.preserve(selectors)",
  locus: "Client",
  descr: ["Especifique reglas para preservar los elementos DOM  individuales al re-visualizar."],
  args: [
    {name: "selectors",
     type: "Array or Object",
     descr: "Array de selectores CSS que cada uno coincide al menos con un elemento, así como `['.thing1', '.thing2']`, o, alternativamente, un diccionario de selectores y funciones node-labeling (véase más adelante)."}
  ]
};

Template.api.template_findAll = {
  id: "template_findAll",
  name: "<em>this</em>.findAll(selector)",
  locus: "Client",
  descr: ["Buscar todos los elementos coincidentes con `selector` en esta instancia de plantilla."],
  args: [
    {name: "selector",
     type: "String",
     descr: 'El selector CSS coincidente, como ámbito de los contenidos de la plantilla.'}
  ]
};

Template.api.template_find = {
  id: "template_find",
  name: "<em>this</em>.find(selector)",
  locus: "Client",
  descr: ["Busca un elemento que coincide con `selector` en esta instancia de plantilla."],
  args: [
    {name: "selector",
     type: "String",
     descr: 'El selector CSS que coincide, como ámbito de los contenidos de la plantilla.'}
  ]
};

Template.api.template_firstNode = {
  id: "template_firstNode",
  name: "<em>this</em>.firstNode",
  locus: "Client",
  descr: ["El primer top-level nodo DOM en esta instancia de plantilla."]
};

Template.api.template_lastNode = {
  id: "template_lastNode",
  name: "<em>this</em>.lastNode",
  locus: "Client",
  descr: ["El último top-level nodo DOM en esta instancia de plantilla."]
};

Template.api.template_data = {
  id: "template_data",
  name: "<em>this</em>.data",
  locus: "Client",
  descr: ["El contexto de los datos de la última invocación de esta instancia."]
};

var rfc = function (descr) {
  return '[RFC5322](http://tools.ietf.org/html/rfc5322) ' + descr;
};

Template.api.email_send = {
  id: "email_send",
  name: "Email.send(options)",
  locus: "Server",
  descr: ["Enviar un e-mail. Lanza un `Error` si fracasa el contacto con el servidor " +
          "de correo o si el servidor de correo devuelve un error."],
  options: [
    {name: "from",
     type: "String",
     descr: rfc('"From:" dirección (requerido)')
    },
    {name: "to",
     type: "String or Array of strings",
     descr: rfc('"To:" dirección[es]')
    },
    {name: "cc",
     type: "String or Array of strings",
     descr: rfc('"Cc:" dirección[es]')
    },
    {name: "bcc",
     type: "String or Array of strings",
     descr: rfc('"Bcc:" dirección[es]')
    },
    {name: "replyTo",
     type: "String or Array of strings",
     descr: rfc('"Reply-To:" dirección[es]')
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
