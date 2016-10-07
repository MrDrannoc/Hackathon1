class mainController {

  constructor(todoService,$scope) {
        this.todoService = todoService;
        this.$scope = $scope;
        this.load();
        this.adr = 'Rouen';
        this.adrx = 'Paris';
        this.blet = '162';
        this.orget = '189';
        this.tone = '30';
        this.tone2 = '60';
        this.total = "0";
        this.total1 = "0";
        this.total2 = "0";
    }

    load() {
        this.todoService.getAll().then((res) => {
            this.todos = res.data;
        });
    }

    create() {
        this.todoService.create(this.todo).then(() => {
            this.todo = '';
            this.load();
        });
    }

    update(todo) {
        this.todoService.update(todo._id, todo.description).then(() => {
            this.load();
        });
    }

    delete(todo) {
        this.todoService.delete(todo._id).then(() => {
            this.load();
        });
    }
    reloadScope() {
      this.$scope.$apply();
    }
    getHU(origin,dest){
      var ble = this.blet;
      var orge = this.orget;
      var tone1 = this.tone;
      var tone2 = this.tone2;
      var prixble = ble*tone1;
      var prixorge = orge*tone2;
      var total;
      $.get("https://maps.googleapis.com/maps/api/distancematrix/json?key=AIzaSyAvFuhZfe7WFLTL7fIA4p181EUMVfNdUOY&origins="+ origin +"&destinations="+dest+"&mode=driving&language=fr-FR",(res) =>{
        console.log(res);
        var reponse = {};
        reponse.distanceText = res.rows[0].elements[0].distance.text;
        reponse.distanceValue = res.rows[0].elements[0].distance.value;
        var km = reponse.distanceText;
        var nb=parseInt(km);
        if (dest == "Rouen" ){
            var rou = (nb * 11.63);
            total = prixble + rou;
            this.total = total;
        }
        else if (dest == "Paris" ) {
            var par = (nb * 12.16);
            total = prixble + par;
            this.total1 = total;
        }
        this.reloadScope();
      });
    }


}
