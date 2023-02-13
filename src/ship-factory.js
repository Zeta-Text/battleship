function ship(length) {
    let aShip = {
        length: length,
        timesHit: 0,
        sunkStatus: false,
        isSunk: function() {
            if(this.length == this.timesHit) {
                this.sunkStatus = true;
                return this.sunkStatus;
            } 
            return this.sunkStatus;
            
        },
        hit: function() {
            this.timesHit++;
            return this.timesHit
        },
    }

    return aShip;
}


export default ship;
