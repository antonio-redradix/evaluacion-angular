
# Ejercicio evaluación Angular

En este ejercicio se evaluará la capacidad del alumno de transladar un diseño y unas especificaciones a un proyecto real en Angular. Los alumnos deberan crear el proyecto desde cero utilizando la CLI de Angular.

Cada alumno publicará su solución en una rama de este mismo roepositorio que nombrará con el siguiente formato: **entrega_nombre-apellido1-apellido2**


## Ejercicio

El objetivo es trasladar el widget meteorológico del primer ejercicio a un proyecto de Angular e implementar la lógica del widget. Los alumnos pueden reutilizar todo el código HTML y CSS que ya han implementado.

### Diseño desktop
![Diseño desktop](https://i.imgur.com/P14vt1W.png)

## Requisitos

La evaluación se hará teniendo  en cuenta la cantidad de requisitos completados y la corrección del código.

 - Crea un proyecto Angular y divídelo en componentes
	 - La información de la parte superior debe estar encapsulada dentro de un componente
	 - Las tarjetas de la parte inferior deben estar encapsuladas en otro componente
 - Carga los datos meteorológicos de la semana de este enlace `.json` `https://api.myjson.com/bins/qds5w`
	 - La petición debe realizarla un **servicio** de Angular
	 - La petición debe utilizar el módulo HttpClient y Observables
 - Substituye los valores del componente inferior con la información del servicio
 - Substituye los valores del componente superior con la información del servicio (día 0)
 - Utiliza routing para que al final de la url de la página se pueda especificar el día que se va a mostrar en el componente superior
	 -  Al pulsar una de las tarjetas inferiores se deben cargar los datos de ese día específico
