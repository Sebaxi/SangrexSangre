const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log("BOT Preparado Para ayudar!");
});
var prefix = config.prefix;

client.on("message", (message) => {
  if (message.content.startsWith("@SangrexSangre")) {
    message.channel.send("Que quieres pendejo!!");
}

  if (message.content.startsWith("hola")) {
    message.channel.send("Hola carnal!");
}

if (message.content.startsWith("bye")) {
  message.channel.send("No mames ahora me toca limpiar tu desmadre!!!");
}



if (message.content.startsWith("reportes")) {
  message.channel.send("En el canal #◀📄▶reportes puedes reportar a las personas que cometen antirol o que no siguen las reglas");
}




if (message.content.startsWith("server")) {
  message.channel.send("La ip de Server es | IP:107.181.173.114 | Port: 25500 ");
}



if (message.content.startsWith(prefix + "roles")) {
  message.channel.send("Tu creas tu propio rol Con los NPCs Los unicos roles que hay Son Policia: Requiere Pruebas Su jefe: SkiPro360 SWAT requiere pruebas y primero ser policia Rango Cabo Su Jefe: Nadie  Presidente Es con elecciones del Pueblo Mandatario Actual: CH4STER ");
}




if (message.content.startsWith("tienda")) {
  message.channel.send("En el canal #◀💵▶tienda Puedes ver todo relacionado con los vips y demas");
}




if (message.content.startsWith(prefix + "vipBronce")) {
  message.channel.send("Costo: 4 usd |Contenido: salario de 5k cade 20 min");
}



if (message.content.startsWith(prefix + "vipPlata")) {
  message.channel.send("Costo: 8 usd |Contenido: salario de 10k cade 15 min y Un auto Exclusivo");
}



if (message.content.startsWith(prefix + "vipOro")) {
  message.channel.send("Costo: 12 usd |Contenido: salario de 15k cade 10 min . una mancion y npcs exclusivos con armas de raideo etc desbloqueador de vehiculos Ademas de Un Auto exclusivo");
}




client.on("ready", () => {
   console.log("Estoy listo!");

   client.user.setPresence( {
       status: "online",
       game: {
           name: "help | crater",
           type: "PLAYING"
       }
   } );

});



if (message.content.startsWith(prefix + "server")) {

    var server = message.guild;

    const embed = new Discord.RichEmbed()
    .setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
    .addField('ID', server.id, true)
    .addField('Region', server.region, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
    .addField('Miembros', server.memberCount, true)
    .addField('Roles', server.roles.size, true)
    .setColor(0x66b3ff)

   message.channel.send({ embed });

  }




  if (message.content.startsWith(prefix + "perfil")) {
    let userm = message.mentions.users.first()
    if(!userm){
      var user = message.author;

        const embed = new Discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
        .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
        .addField('ID', user.id, true)
        .addField('Estado', user.presence.status, true)
        .addField('Apodo', message.member.nickname, true)
        .addField('Cuenta Creada', user.createdAt.toDateString(), true)
        .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
        .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
        .setColor(0x00ff33)

       message.channel.send({ embed });
    }else{
      const embed = new Discord.RichEmbed()
      .setThumbnail(userm.avatarURL)
      .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
      .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
      .addField('ID', userm.id, true)
      .addField('Estado', userm.presence.status, true)
      .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
      .setColor(0x00ff33)

     message.channel.send({ embed });
    }

  }




  if (message.content.startsWith(prefix + "avatar")) {
        let img = message.mentions.users.first()
        if (!img) {

            const embed = new Discord.RichEmbed()
            .setImage(`${message.author.avatarURL}`)
            .setColor(0x00ff33)
            .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
            message.channel.send({ embed });

        } else if (img.avatarURL === null) {

            message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");

        } else {

            const embed = new Discord.RichEmbed()
            .setImage(`${img.avatarURL}`)
            .setColor(0x00ff33)
            .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
            message.channel.send({ embed });

        };

    }



  if(message.content.startsWith(prefix + 'help')){

      message.channel.send('**'+message.author.username+'**, Mira tus Mensajes Privados Ahi estan Tu Ayuda .');
      message.author.send('**COMANDOS DE SangrexSangreBOT**\n```\n'+
                          '-> '+prefix+'ping           :: Comprueba la latencia del bot y de tus mensajes.\n'+
                          '-> '+prefix+'avatar <@user> :: Muestra el avatar de un usuario.\n'+
                          '-> '+prefix+'perfil <@user>   :: Muestra información sobre un usuario mencioando.\n'+
                          '-> '+prefix+'server         :: Muestra información de un servidor determinado.\n'+
                          '-> '+prefix+'vipBronce         :: Te dice El valor del Vip y sus beneficios.\n'+
                          '-> '+prefix+'vipPlata        :: Te dice El valor del Vip y sus beneficios.\n'+
                          '-> '+prefix+'vipOro        :: Te dice El valor del Vip y sus beneficios.\n'+
                          '-> '+prefix+'roles       :: Te ayuda para saber como se rolea en el server.\n'+
                          '-> Hola:: Retorna un saludo como mensaje.\n```\n\n'+
                          '-> Bye:: Te despide Cuando te quieres ir.\n'+
                          '**SangrexSangreBOT - Cualquier Bug ENTRA Aqui :**https://discord.gg/ZkwRkJW');

    }

});
client.login(config.token);
