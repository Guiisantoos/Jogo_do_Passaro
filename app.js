console.log ("Rodando a lsita em JS")

const sprites = new Image();
sprites.src = 'Sprites.png'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext ('2d')



const passaro = {
    spritex: 0,
    spritey: 0,
    altura: 35,
    largura: 25,
    x: 10,
    y: 50,
    telax: 25,
    telay: 20,
    velocidade: 0,
    gravidade: 0.20,

    atualiza(){
        passaro.velocidade = passaro.velocidade + passaro.gravidade;
        passaro.y = passaro.y + passaro.velocidade;
    },

    desenha(){
        ctx.drawImage (sprites, 
            passaro.spritex, passaro.spritey, 
            passaro.altura, passaro.largura, 
            passaro.x, passaro.y, 
            passaro.telax, passaro.telay)
        
    }
}
const chao = {
    spritex: 0,
    spritey: 609,
    altura: 224,
    largura: 113,
    x: 0,
    y: canvas.height - 113,
    desenha(){
        ctx.drawImage(sprites, 
            chao.spritex, chao.spritey, 
            chao.altura, chao.largura, 
            chao.x, chao.y,
            chao.altura, chao.largura);

        ctx.drawImage(sprites, 
            chao.spritex, chao.spritey, 
            chao.altura, chao.largura, 
            chao.x + chao.largura, chao.y,
            chao.altura, chao.largura);
    }
}
const planoDeFundo ={
    spritex: 390,
    spritey: 0,
    largura: 275,
    altura: 204,
    x:-1,
    y: canvas.height - 204,

    desenha(){
        ctx.fillStyle = '#70c5ce';
        ctx.fillRect (0,0, canvas.width, canvas.height);
        ctx.drawImage(
            sprites,
            planoDeFundo.spritex, planoDeFundo.spritey, 
            planoDeFundo.largura, planoDeFundo.altura, 
            planoDeFundo.x, planoDeFundo.y, 
            planoDeFundo.largura, planoDeFundo.altura
        );
        
        ctx.drawImage(
            sprites,
            planoDeFundo.spritex, planoDeFundo.spritey, 
            planoDeFundo.largura, planoDeFundo.altura, 
            planoDeFundo.x + planoDeFundo.largura, planoDeFundo.y, 
            planoDeFundo.largura, planoDeFundo.altura
        )
    }
}

const mensagemComeço ={
    spritex: 133,
    spritey: 0,
    altura:176,
    largura: 152,
    x: 75,
    y: 100,

    desenha(){
        ctx.drawImage(sprites, 
            mensagemComeço.spritex, mensagemComeço.spritey,
            mensagemComeço.altura, mensagemComeço.largura,
            mensagemComeço.x, mensagemComeço.y, mensagemComeço.altura, mensagemComeço.largura)
    }
}

function loop (){
    planoDeFundo.desenha();
    chao.desenha();
    passaro.desenha();
    mensagemComeço.desenha();
    passaro.atualiza();
    requestAnimationFrame(loop);
}

loop();
