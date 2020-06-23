const lerFotos = async (callback) => {
    //usar o ip da máquina no fetch ao invés de localhost
    const fotosHTTP  = await fetch("http://localhost/feed");
    //converte resposta em json
    const fotosJson = await fotosHTTP.json();
    //captura as fotos do json
    callback(fotosJson);
}

export default lerFotos;