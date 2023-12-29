import React from "react";

export default function Paragrafo(props) {


    if (props.textoPais == 'ARG') {
        return (
            <label><span>{props.label}</span>
                <p >
                    A Argentina, cujo nome oficial é República Argentina, é um país localizado no sul da América do Sul, o maior depois do Brasil. Está entre os dez maiores países do mundo.
                    Em termos populacionais, é o terceiro país mais populoso da América do Sul, ficando atrás do Brasil e da Colômbia.
                    É banhado pelo Oceano Atlântico e faz fronteira com Bolívia, Brasil, Chile, Paraguai e Uruguai. Paraná, Santa Catarina e Rio Grande do Sul são os estados brasileiros que fazem fronteira com o país.
                    Curiosamente, o nome Argentina surge do latim argentum, que significa “prata”. Isso porque, segundo a lenda, a Argentina seria rica nesse metal.
                </p>
            </label>
        )
    }
    if (props.textoPais == 'BOL') {
        return (
            <label><span>{props.label}</span>
                <p >
                    A Bolívia é uma república democrática, dividida em nove departamentos. Geograficamente, possui duas regiões distintas, o altiplano a oeste e as planícies do leste,
                    cuja parte norte pertence à bacia Amazônica e a parte sul à Bacia do Rio da Prata, da qual faz parte o Chaco boliviano. É um país em desenvolvimento, com um Índice
                    de Desenvolvimento Humano (IDH) médio e uma taxa de pobreza que atinge cerca de 60% da população. Dentre suas principais atividades econômicas, destacam-se a agricultura,
                    silvicultura, pesca, mineração, e bens de produção como tecidos, vestimentas, metais refinados e petróleo refinado. A Bolívia é muito rica em minerais, especialmente em estanho.
                </p>
            </label>
        )
    }
    if (props.textoPais == 'BRA') {
        return (
            <label><span>{props.label}</span>
                <p >
                    Banhado pelo Oceano Atlântico, o Brasil tem um litoral de 7 491 km e faz fronteira com todos os outros países sul-americanos, exceto Chile e Equador,
                    sendo limitado a norte pela Venezuela, Guiana, Suriname e pelo departamento ultramarino francês da Guiana Francesa; a noroeste pela Colômbia; a
                    oeste pela Bolívia e Peru; a sudoeste pela Argentina e Paraguai e ao sul pelo Uruguai. Vários arquipélagos formam parte do território brasileiro,
                    como o Atol das Rocas, o Arquipélago de São Pedro e São Paulo, Fernando de Noronha (o único destes habitado por civis) e Trindade e Martim Vaz.
                    O Brasil também é o lar de uma diversidade de animais selvagens, ecossistemas e de vastos recursos naturais em uma grande variedade de habitats
                    protegidos.
                </p>
            </label>
        )
    }
    if (props.textoPais == 'CHI') {
        return (
            <label><span>{props.label}</span>
                <p >
                    O Chile possui um território incomum, com 4 300 quilômetros de comprimento e, em média, 175 km de largura, o que dá ao país um clima
                    muito variado, indo do deserto mais seco do mundo o Atacama no norte do país, a um clima mediterrâneo no centro, até um clima alpino
                    propenso à neve ao sul, com geleiras, fiordes e lagos. O deserto do norte chileno contém uma grande riqueza mineral, principalmente
                    de cobre. Uma área relativamente pequena no centro chileno domina o país em termos de população e de recursos agrícolas. Esta área é
                    o centro cultural, político e financeiro a partir do qual o Chile se expandiu no final do século XIX, quando integrou as regiões norte
                    e sul em uma só nação. O sul do país é rico em florestas e pastagens e possui uma cadeia de montanhas, vulcões e lagos. A costa sul é
                    um gigantesco labirinto de penínsulas compostas por fiordes, enseadas, canais e ilhas. A cordilheira dos Andes está localizada por
                    toda a fronteira oriental chilena.


                </p>
            </label>
        )
    }
    if (props.textoPais == 'COL') {
        return (
            <label><span>{props.label}</span>
                <p>
                    A Colômbia faz fronteira a leste com a Venezuela e Brasil; ao sul com o Equador e Peru; para o norte com o Mar do Caribe, ao noroeste
                    com o Panamá; e a oeste com o Oceano Pacífico. A Colômbia também tem fronteiras marítimas com a Venezuela, Jamaica, Haiti, República
                    Dominicana, Honduras, Nicarágua e Costa Rica. Com uma população de mais de 47 milhões de pessoas, a Colômbia tem a 28ª maior
                    população do mundo e a segunda maior da América do Sul, depois do Brasil. A Colômbia é o segundo país mais populoso com a língua
                    espanhola como idioma oficial (depois do México), e tem a segunda maior comunidade de língua espanhola no mundo depois do México.
                </p>
            </label>
        )
    }
    if (props.textoPais == 'ECU') {
        return (
            <label><span>{props.label}</span>
                <p >
                    Ecuador, É uma república democrática representativa localizada na América do Sul, limitada a norte pela Colômbia, a leste e sul pelo Peru e
                    a oeste pelo oceano Pacífico. É um dos dois países da região que não têm fronteiras comuns com o Brasil, além do Chile. Além do
                    território continental, o Equador possui também as ilhas Galápagos, a cerca de 1 000 km do território continental, sendo o país mais
                    próximo daquelas ilhas. Seu território de 256 370 km² é cortado ao meio pela imaginária linha do Equador.
                    A principal língua falada no país é o espanhol (94% da população). Entre os idiomas oficiais em comunidades nativas estão o quíchua,
                    o shuar e onze outros idiomas.
                </p>
            </label>
        )
    }
    if (props.textoPais == 'GUY') {
        return (
            <label><span>{props.label}</span>
                <p >
                    A região conhecida como "as Guianas" consiste na grande massa de terra ao norte do Rio Amazonas e a leste do Rio Orinoco, conhecida como
                    "terra de muitas águas". Os principais rios da Guiana incluem o Rio Essequibo, o Berbice e o Demerara. Originalmente habitada por muitos
                    grupos indígenas, a Guiana foi colonizada pelos holandeses antes de ser transferida para o controle britânico no final do século XVIII. Foi
                    governada como Guiana Britânica, com uma economia predominantemente de plantação até os anos 1950. Ela conquistou a independência em 1966
                    e tornou-se oficialmente uma república na Comunidade das Nações em 1970. O legado do domínio britânico se reflete na administração política do
                    país e na população diversificada, que inclui grupos indianos, africanos, ameríndios e multirraciais.
                </p>
            </label>
        )
    }
    if (props.textoPais == 'GUF') {
        return (
            <label><span>{props.label}</span>
                <p >
                    A Guiana Frances é um departamento ultramarino e região da França, na costa do Atlântico Norte da América do Sul, nas Guianas.
                    Faz fronteira com o Brasil a leste e sul e com o Suriname a oeste. Desde 1981, quando Belize se tornou independente do Reino
                    Unido, a Guiana Francesa tem sido o único território continental na América que ainda está sob a soberania de um país europeu.
                    Com uma área de 83 534 km², a Guiana Francesa é a segunda maior região da França e a maior região ultraperiférica dentro
                    da União Europeia. Tem uma densidade populacional muito baixa, com apenas 3,6 habitantes por km². Metade de seus 301 099
                    habitantes em 2022 viviam na área metropolitana de Caiena, sua capital. Desde dezembro de 2015, tanto a região como o
                    departamento têm sido governados por uma assembleia única no âmbito de uma nova coletividade territorial, a Coletividade
                    Territorial da Guiana Francesa . Essa assembleia, a Assembleia da Guiana Francesa , substituiu o antigo conselho regional e o conselho departamental, ambos desmembrados
                </p>
            </label>
        )
    }
    if (props.textoPais == 'PAR') {
        return (
            <label><span>{props.label}</span>
                <p >
                    Paraguai, oficialmente República do Paraguai, é um país do centro da América do Sul, limitado a norte e oeste pela Bolívia, a nordeste
                    e leste pelo Brasil e a sul e oeste pela Argentina. Possui uma área de 406 752 quilômetros quadrados, um pouco maior que o estado
                    brasileiro de Mato Grosso do Sul. Segundo o último Censo em 2022, a população paraguaia foi de 6,1 milhões de habitantes, a
                    maioria dos quais estão concentrados na região sudeste do país. Ao lado da Bolívia, o Paraguai é um dos dois países da América do Sul
                    que não possuem uma saída para o mar.O Paraguai está localizado no centro-sul da América do Sul. A topografia da área do leste do país
                    é extensamente plana. O principal produto de exportação cultivado nessa região é a soja. No oeste, a principal atividade econômica
                    do cerrado do Grande Chaco é a pecuária.
                </p>
            </label>
        )
    }
    if (props.textoPais == 'PER') {
        return (
            <label><span>{props.label}</span>
                <p >
                    Peru, oficialmente chamado de República do Peru, é um país sul-americano limitado ao norte pelo Equador e pela Colômbia, a leste pelo Brasil
                    e pela Bolívia e ao sul pelo Chile. O seu litoral, a oeste, é banhado pelo oceano Pacífico. Sua geografia é variada, exibindo desde planícies
                    áridas na costa do Pacífico, aos picos nevados dos Andes e à floresta amazônica, características que proporcionam a este país diversos recursos
                    naturais. O território peruano abrigou a civilização de Caral, uma das mais antigas do mundo, bem como o Império Inca, considerado o maior Estado
                    da América pré-colombiana.  seu território foi elevado a vice-reinado pelo Império Espanhol, no século XVI. Sua independência foi formalmente proclamada
                    em 1821 e foi definida pela derrota do Exército Espanhol na Batalha de Ayacucho três anos depois.    Nos primeiros anos como país independente,
                    o Peru passou por períodos de alternância entre turbulência política e crise fiscal e estabilidade e crescimento econômico.
                </p>
            </label>
        )
    }
    if (props.textoPais == 'SUR') {
        return (
            <label><span>{props.label}</span>
                <p >
                    Suriname, oficialmente chamado de República do Suriname, é um país do norte da América do Sul, limitado a norte pelo oceano Atlântico,
                    leste pela França (Guiana Francesa), a sul pelo Brasil e a oeste pela Guiana. Com pouco menos de 165 000 km², é o menor país da América
                    do Sul. O Suriname tem uma população de aproximadamente 632,638 (2022 est.),[ a maioria dos quais vive na costa norte do país,
                    dentro ou nos arredores da capital e maior cidade do país, Paramaribo. O Suriname é considerado uma nação medianamente desenvolvida,
                    com índice de desenvolvimento humano (IDH) de 0,738, considerado elevado, e com um renda per capita de US$ 6 373 e perspectiva
                    média de vida ao nascimento de 71,29 anos.
                </p>
            </label>
        )
    }
    if (props.textoPais == 'URU') {
        return (
            <label><span>{props.label}</span>
                <p >
                    Uruguai, oficialmente República Oriental do Uruguai, é um país localizado na parte sudeste da América do Sul. Sua
                    população é de cerca de 3,5 milhões de habitantes, dos quais 1,8 milhão vivem na capital, Montevidéu, e em sua área metropolitana.
                    Estima-se que entre 88% e 94% da população possua ascendência principalmente europeia ou mestiça. A única fronteira terrestre do
                    Uruguai é com o estado brasileiro do Rio Grande do Sul, no norte, sendo a segunda menor fronteira do Brasil com outro país sul-americano.
                    Para o oeste encontra-se o rio Uruguai e a sudoeste situa-se o estuário do rio da Prata. O país faz fronteira com a Argentina apenas em
                    alguns bancos de qualquer um dos rios citados acima, enquanto que a sudeste fica o oceano Atlântico. O Uruguai é o segundo menor país da
                    América do Sul, sendo somente maior que o Suriname.
                </p>
            </label>
        )
    }
    if (props.textoPais == 'VEN') {
        return (
            <label><span>{props.label}</span>
                <p >
                    Venezuela , é um país da América localizado na parte norte da América do Sul, constituído por uma parte continental e um grande número
                    de pequenas ilhas no Mar do Caribe, cuja capital e maior aglomeração urbana é a cidade de Caracas. Possui uma área de 916 445 km², sendo
                    o 32º maior país no mundo em território. Suas fronteiras são delimitadas a norte com o Mar do Caribe, a oeste com a Colômbia, ao sul com
                    o Brasil e ao leste com a Guiana, com quem mantém disputas territoriais. Através das suas zonas marítimas, tem soberania sobre 71 295 km²
                    de mar territorial, 22 224 km² na zona contígua, 471 507 km² do Mar do Caribe e o Oceano Atlântico sob o conceito de zona económica
                    exclusiva, e 99 889 km² de plataforma continental. Esta área marinha faz fronteira com treze estados soberanos, sendo Trinidad e Tobago,
                    Granada, São Vicente e Granadinas, Santa Lúcia e Barbados alguns deles. Sua população é estimada em 28 067 000 habitantes e a capital
                    nacional é Caracas.
                </p>
            </label>
        )
    }



}