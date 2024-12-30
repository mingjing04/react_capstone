import React from "react";
import Button from "./LemonButton";
import Card from "./Card";
import bruchetta from "../assets/images/bruchetta.svg";
import greeksalad from "../assets/images/greek salad.jpg"
import basket from "../assets/images/basket .svg"
import LemonBox from "./LemonBox";
const Menu = () => {
    return (
        <LemonBox>
            <div className="flex flex-row content-center justify-between">
                <div>
                    <h1 className="font-serif text-xl text-lemon-green">
                        Menu
                    </h1>
                    <h2 className="text-lg">Highlights</h2>
                </div>
                <div className="flex flex-col justify-center">
                    <Button variant="primary">Full Menu</Button>
                </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 md:p-0">
                <Card title="Bruchetta" url={bruchetta}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Optio repellat voluptate deserunt modi veritatis
                    quidem nobis porro illum dolorem, sit excepturi aliquid
                    nihil! Doloribus quaerat consequatur cum officia dolorum
                    officiis.
                </Card>
                <Card title='Greek Salad' url={greeksalad}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Accusantium eveniet aliquid aliquam tempora veniam
                    est corrupti consequuntur dolorum enim animi dolore
                    culpa eum aut beatae, deserunt tenetur aspernatur esse
                    inventore.
                </Card>
                <Card title='basket' url={basket}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Accusantium eveniet aliquid aliquam tempora veniam
                    est corrupti consequuntur dolorum enim animi dolore
                    culpa eum aut beatae, deserunt tenetur aspernatur esse
                    inventore.
                </Card>
            </div>

        </LemonBox>
    );
};

export default Menu;
