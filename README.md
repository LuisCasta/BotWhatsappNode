# BotWhatsappNode
Bot Whatsapp Landbot NodeJs


# API DOCUMENTATION
/api/v1/docs

# Docker Construction
    # image
    docker build . -t botimage
    # view images
    docker images
    # conteiner
        # (para correr con ubuntu)
        docker run -d --name botserver --restart unless-stopped --network host botimage
        # (para correr con windows)
        docker run -d --name botserver --restart unless-stopped -p 3000:3000 botimage
    # view conteiners
    docker ps