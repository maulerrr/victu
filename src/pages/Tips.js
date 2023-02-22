import React from "react";
import Tip from "../components/UI/tip-block/Tip";

function TipsPage(){
    return (
        <div className="Tips">
          <Tip tip={{ header: "Base your meals on higher fibre starchy carbohydrates",
                        body: "Try to include at least 1 starchy food with each main meal. Some people think starchy foods are fattening, but gram for gram the carbohydrate they contain provides fewer than half the calories of fat."}}/>
          <Tip tip={{ header: "Eat lots of fruit and veg",
                        body: "It's recommended that you eat at least 5 portions of a variety of fruit and veg every day. They can be fresh, frozen, canned, dried or juiced.\n" +
                          "\n"}}/>
          <Tip tip={{ header: "Eat more fish, including a portion of oily fish",
            body: "Aim to eat at least 2 portions of fish a week, including at least 1 portion of oily fish.\n" +
              "\n" +
              "Oily fish are high in omega-3 fats, which may help prevent heart disease. "}}/>
        </div>
    )
}

export default TipsPage;