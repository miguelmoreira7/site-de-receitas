import { useEffect, useState } from "react";

type Meal = {
  [key: string]: string | null
}

const x = [
      {
          "idIngredient": "1",
          "strIngredient": "Chicken",
          "strDescription": "The chicken is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. There are more chickens in the world than any other bird or domesticated fowl. Humans keep chickens primarily as a source of food (consuming both their meat and eggs) and, less commonly, as pets. Originally raised for cockfighting or for special ceremonies, chickens were not kept for food until the Hellenistic period (4th–2nd centuries BC).\r\n\r\nGenetic studies have pointed to multiple maternal origins in South Asia, Southeast Asia, and East Asia, but with the clade found in the Americas, Europe, the Middle East and Africa originating in the Indian subcontinent. From ancient India, the domesticated chicken spread to Lydia in western Asia Minor, and to Greece by the 5th century BC. Fowl had been known in Egypt since the mid-15th century BC, with the \"bird that gives birth every day\" having come to Egypt from the land between Syria and Shinar, Babylonia, according to the annals of Thutmose III.",
          "strType": null
      },
      {
          "idIngredient": "2",
          "strIngredient": "Salmon",
          "strDescription": "Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Other fish in the same family include trout, char, grayling and whitefish. Salmon are native to tributaries of the North Atlantic (genus Salmo) and Pacific Ocean (genus Oncorhynchus). Many species of salmon have been introduced into non-native environments such as the Great Lakes of North America and Patagonia in South America. Salmon are intensively farmed in many parts of the world.\r\n\r\nTypically, salmon are anadromous: they hatch in fresh water, migrate to the ocean, then return to fresh water to reproduce. However, populations of several species are restricted to fresh water through their lives. Folklore has it that the fish return to the exact spot where they hatched to spawn. Tracking studies have shown this to be mostly true. A portion of a returning salmon run may stray and spawn in different freshwater systems; the percent of straying depends on the species of salmon. Homing behavior has been shown to depend on olfactory memory. Salmon date back to the Neogene.",
          "strType": null
      },
      {
          "idIngredient": "3",
          "strIngredient": "Beef",
          "strDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\r\n\r\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.",
          "strType": null
      },
      {
          "idIngredient": "4",
          "strIngredient": "Pork",
          "strDescription": "Pork is the culinary name for the flesh of a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC.\r\n\r\nPork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork.\r\n\r\nPig is the most popular meat in the Eastern and non-Muslim parts of Southeastern Asia (Indochina, Philippines, Singapore, East Timor) and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish, Muslim and Rastafarian dietary law, for religious reasons, with several suggested possible causes.",
          "strType": null
      }
  ].map((ingredient) => {
    return {
      id: ingredient.idIngredient,
      name: ingredient.strIngredient,
    }
  })

function Teste() {
  console.log(x);
    const [meals, setMeals] = useState<Array<Meal>>([])
    const [search, setSearch] = useState<string>("")
    async function getMeals(){
      setMeals([
        {
          name: "Arroz",
        },
        {
          name: "Feijão",
        },
        {
          name: "Macarrão",
        },
        {
          name: "Batata",
        }
      ]);
    }

    useEffect(() => {
      getMeals();
    }, [])

  return (
    <ul>
      <input 
        value={search} 
        type="text" 
        name="searchmeal" 
        id="searchmealid" 
        onChange={(e) => {
          setSearch(e.target.value);
        }} 
      />
      {x?.filter((ingredient) => {
        const parsedIngredientToLowercase: string = ingredient?.name?.toLowerCase() as string;
        return parsedIngredientToLowercase?.includes(search)
      }).map((ingredient: {
        id: string,
        name: string,
      }) => {
        return (
          <li key={ingredient.id}>{ingredient.name}</li>
        )
      })}
    </ul>
  )
}

export default Teste