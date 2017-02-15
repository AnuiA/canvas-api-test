window.onload = () => {
    var canvas = document.getElementById("app") as HTMLCanvasElement;
    var context2D = canvas.getContext("2d");

    var stage = new DisplayObjectContainer();
    setInterval(() => {

        context2D.clearRect(0, 0, canvas.width, canvas.height);//在显示图片之前先清屏，将之前帧的图片去掉,清屏范围最好设置成画布的宽与高
        stage.draw(context2D);

    }, 100)


    //文字
    var word1 = new TextField();
    word1.size = 900;
    word1.x = 150;
    word1.y = 150;
    word1.text = "Hello World !!!!!!!!";
    word1.color = "#FFF000"

    //图片
    var image = document.createElement("img");
    image.src = "snake.jpg";

    image.onload = () => {

        var avater = new Bitmap();
        avater.image = image;
        stage.addChild(avater);
        stage.addChild(word1);
    }

};



interface Drawable {
    draw(context2D: CanvasRenderingContext2D);

}

class DisplayObject implements Drawable {

    x: number = 0;
    y: number = 0;

    draw(context2D: CanvasRenderingContext2D) {

    }
}
class Bitmap extends DisplayObject implements Drawable {

    image: HTMLImageElement;

    draw(context2D: CanvasRenderingContext2D) {

        context2D.drawImage(this.image, this.x, this.y);
    }
}


class TextField extends DisplayObject implements Drawable {

    text: string = "";

    color: string = "";

    size: number = 0;

    draw(context2D: CanvasRenderingContext2D) {

        context2D.fillStyle = this.color;
        context2D.fillText(this.text, this.x, this.y);
    }

}



class DisplayObjectContainer implements Drawable {

    array: Drawable[] = [];

    draw(context2D: CanvasRenderingContext2D) {

        for (let drawable of this.array) {

            drawable.draw(context2D);
        }
    }

    addChild(displayObject: DisplayObject) {

        this.array.push(displayObject);

    }
}
