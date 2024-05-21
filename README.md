# Pizza Token Hunt

Una aplicación web interactiva para buscar y verificar tokens de pizza en una blockchain simulada, desarrollada para celebrar el Bitcoin Pizza Day.

## Descripción

Este proyecto permite a los usuarios conectarse a MetaMask, agregar y verificar tokens en una blockchain simulada utilizando un contrato inteligente desplegado en la red de prueba de Polygon Mumbai.

## Funcionalidades

- Conectar MetaMask
- Agregar un token
- Verificar un token

## Requisitos Previos

- Node.js (versión 14 o superior)
- MetaMask instalado en tu navegador
- Una cuenta en la red de prueba de Polygon Mumbai con algo de MATIC para cubrir las transacciones

## Configuración

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/pizza-token-hunt.git
   cd pizza-token-hunt

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura la red de prueba de Polygon Mumbai en MetaMask:

   - **Network Name:** Polygon Mumbai Testnet
   - **New RPC URL:** `https://rpc-mumbai.matic.today`
   - **Chain ID:** `80001`
   - **Currency Symbol:** `MATIC`
   - **Block Explorer URL:** `https://mumbai.polygonscan.com/`

4. Asegúrate de tener algo de MATIC en tu cuenta de MetaMask en la red de prueba de Polygon Mumbai.

5. Configura el contrato inteligente:

   - Despliega el contrato inteligente en la red de prueba de Polygon Mumbai utilizando Remix o Hardhat.
   - Copia la dirección del contrato desplegado y el ABI en el archivo `contract.js`.

## Estructura del Proyecto

```
pizza-token-hunt/
├── index.html
├── app.js
├── contract.js
└── bs-config.json
```

- `index.html`: Archivo HTML principal de la aplicación.
- `app.js`: Archivo JavaScript que maneja la lógica de la aplicación.
- `contract.js`: Contiene la dirección del contrato y el ABI.
- `bs-config.json`: Configuración para lite-server.

## Ejecución

1. Inicia el servidor web:

   ```bash
   npm start
   ```

2. Abre tu navegador y navega a `http://localhost:3000`.

3. Conecta tu cuenta de MetaMask y usa la aplicación para agregar y verificar tokens.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Contacto

Para cualquier pregunta o sugerencia, por favor contacta a [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com).
```

### Pasos adicionales:

1. **Crea el archivo `contract.js`**: Asegúrate de que tu archivo `contract.js` tenga la dirección del contrato y el ABI correcto.

   ```javascript
   const contractAddress = '0xYourContractAddressHere';  // Dirección del contrato desplegado
   const abi = [
       {
           "inputs": [
               {
                   "internalType": "string",
                   "name": "tokenId",
                   "type": "string"
               }
           ],
           "name": "addToken",
           "outputs": [],
           "stateMutability": "nonpayable",
           "type": "function"
       },
       // Otras definiciones de funciones
   ];
   ```

2. **Configura el servidor web**: Asegúrate de que `bs-config.json` esté configurado para usar lite-server.

   ```json
   {
     "server": {
       "baseDir": "./",
       "index": "index.html"
     }
   }
   ```

Con este `README.md`, cualquier persona que clone tu repositorio debería poder configurar y ejecutar la aplicación sin problemas. ¡Buena suerte con tu proyecto en GitHub!
