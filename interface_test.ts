interface RectangleOptions{
    width: number;
    length: number;
    height?: number;
}

function drawRectangle(rectangle: RectangleOptions): void{
    let width: number = rectangle.width
    let length: number = rectangle.length

    if(rectangle.height){
        let height: number = rectangle.height
        // Draw 3 D 
    }
}

// interface like a dictionary, but it define the type explicitly 
// interface is also like a parameters structure. define what is reuqire parameter and what is not 