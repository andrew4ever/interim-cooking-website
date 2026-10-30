class Recipe {
            constructor(params={}){
                let defaults = {
                    title : "no title",
                    creator : "no creator",
                    EPT : "estimated prep time",
                    ETT : "estimated total time"
                }
                this.params={...defaults, ...params};

                console.log(this.params);
            }
            export(){
                console.log(this.params);
            }
        }

        recipe = new Recipe();
        console.log("start");

        document.getElementById("title").addEventListener("change",function(){
            recipe.params.title=this.value;
            console.log(recipe.params)
        })
        document.getElementById("creator").addEventListener("change",function(){
            recipe.params.creator=this.value;
            console.log(recipe.params)
        })
        document.getElementById("date").addEventListener("change",function(){
            recipe.params.date=this.value;
            console.log(recipe.params)
        })
        document.getElementById("ept").addEventListener("change",function(){
            recipe.params.ept=this.value;
            console.log(recipe.params)
        })
        document.getElementById("ett").addEventListener("change",function(){
            recipe.params.ett=this.value;
            console.log(recipe.params)
        }) 
        document.getElementById("reflection").addEventListener("change",function(){
            recipe.params.reflection=this.value;
            console.log(recipe.params)
        })
         document.getElementById("soc").addEventListener("change",function(){
            recipe.params.soc=this.value;
            console.log(recipe.params)
        })
        document.getElementById("submit").addEventListener("click",function(){
            recipe.export()
        })