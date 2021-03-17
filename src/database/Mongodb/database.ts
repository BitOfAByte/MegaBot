import mongoose  from 'mongoose';

mongoose.connect('mongodb+srv://Nemijah:Azizaetl8.@megabot.gifrp.mongodb.net/MegaBot', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('open', () => console.log('Connected to the Mongoose Database.'));