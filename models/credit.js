var mongoose = require('mongoose');

var creditSchema = new mongoose.Schema ({
    action: {type: String, enum: ["played", "wrote", "produced", "engineered"]},
    instrument: {
        type: String,
        enum: [ "accordion", "acoustic guitar", "alto saxophone", "auxilliary percussion", "background vocals", "banjo", "baritone saxophone", 
                "baritone", "bass clarinet", "bass trombone", "bongos", "cajon", "cello", "clarinet", "congas", "contrabass", "cowbell", 
                "djembe", "drum set", "electric bass", "electric guitar", "flugelhorn", "flute", "french horn", "harmonica", "harp", "keyboards (general)", 
                "lead vocals", "mandolin", "marimba", "mellophone", "oboe", "organ", "piano", "piccolo", "soprano saxophone", "steel drums", 
                "steel guitar", "synthesizer", "tenor saxophone", "timbales", "timpani", "trombone", "trumpet", "tuba", "upright bass", "vibraphone", "viola", "violin" ]
    },
    artist: {type: String}
    
});

module.exports = mongoose.model('Credit', creditSchema);