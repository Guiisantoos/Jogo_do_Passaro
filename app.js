console.log ("Rodando a lsita em JS")

const sprites = new Image();
sprites.src = 'Sprites.png'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext ('2d')

const passaro = {
    spritex: 114,
    spritey: 328,
    altura: 19,
    largura: 14,
    x: 10,
    y: 50,
    telax: 19,
    telay: 14,
    desenha(){
        ctx.drawImage (sprites, 
            passaro.spritex, passaro.spritey, 
            passaro.altura, passaro.largura, 
            passaro.x, passaro.y, 
            passaro.telax, passaro.telay)
    }
}
const chao = {
    spritex: 292,
    spritey: 0,
    altura: 170,
    largura: 56,
    x: 0,
    y: canvas.height - 56,
    desenha(){
        ctx.drawImage(sprites, 
            chao.spritex, chao.spritey, 
            chao.altura, chao.largura, 
            chao.x, chao.y,
            chao.altura, chao.largura)
    }
}
const planoDeFundo ={
    spritex: 0,
    spritey: 0,
    altura: 145,
    largura: 257,
    x:0,
    y:0,

    desenha(){
        ctx.drawImage(
            sprites,
            planoDeFundo.spritex, planoDeFundo.spritey, 
            planoDeFundo.altura, planoDeFundo.largura, 
            planoDeFundo.x, planoDeFundo.y, 
            planoDeFundo.altura, planoDeFundo.largura
        )
    }
}

function loop (){
    planoDeFundo.desenha();
    chao.desenha();
    passaro.desenha();
    requestAnimationFrame(loop);
}

loop();
