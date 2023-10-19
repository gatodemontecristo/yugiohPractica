

export const getCards = async(nombre) => {
    console.log("LLEGO A GETCARDS");
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${nombre}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const baraja = data.map(carta=>({
        id: carta.id,
        name: carta.name,
        type: carta.type,
        frameType: carta.frameType,
        desc: carta.desc,
        atk: carta.atk,
        def: carta.def,
        level: carta.level,
        race: carta.race,
        attribute: carta.attribute,
        image: carta.card_images[0].image_url_cropped
      }))
console.log(baraja);

  return baraja;
}
