var usuario = prompt("Cual es tu peso?"); //lee la cadena
        var planeta = parseInt( prompt("Elije el planeta:\n-1 es marte \n-2 es jupiter \n-3 es luna"));//pront es para leer una variable . \alt 92 \n sirve para hacer un salto de linea 
        var peso = parseFloat(usuario);//parseInt es para convertir la variable en un real
        var g_tierra = 9.8;
        var g_marte = 3.7;
        var g_jupiter = 24.8;
        var g_luna = 1.62;
        var peso_final;
        var nombre ;
        if (planeta == 1)
            {
                peso_final = peso * g_marte / g_tierra;
                nombre = "Marte";
            }
        else if (planeta == 2)
        {
            peso_final = peso *  g_jupiter / g_tierra;
            nombre = "Jupiter";
        }
        else if (planeta == 3)
        {
            peso_final = peso *  g_luna / g_tierra;
            nombre = "Luna";
        }
        else
            {
                peso_final = 10000000000;
                nombre = "Krypton";
            }
        peso_final = parseInt(peso_final);
        document.write("Tu peso en " + nombre + " seria <strong>" + peso_final + " kilos</strong>");

        //parseInt es para convertir la variable en un real
        //parseFloat es para convertir la variable a decimales 
