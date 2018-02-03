var mongoose = require('mongoose');

var creditSchema = new mongoose.Schema ({
    action: {type: String, enum: []},
    instrument: {
        type: String,
        enum: [ "Accordion", "Acoustic guitar", "Alto saxophone", "Auxilliary percussion", "Background vocals", "Banjo", "Baritone saxophone", 
                "Baritone", "Bass clarinet", "Bass trombone", "Bongos", "Cajon", "Cello", "Clarinet", "Congas", "Contrabass", "Cowbell", 
                "Djembe", "Drum set", "Electric bass", "Electric guitar", "Flugelhorn", "Flute", "French horn", "Harmonica", "Harp", "Keyboards(general)", 
                "Lead vocals", "Mandolin", "Marimba", "Mellophone", "Oboe", "Organ", "Piano", "Piccolo", "Soprano saxophone", "Steel drums", 
                "Steel guitar", "Synthesizer", "Tenor saxophone", "Timbales", "Timpani", "Trombone", "Trumpet", "Tuba", "Upright bass", "Vibraphone", "Viola", "Violin" ]
    },
    media: {type: String}
});
