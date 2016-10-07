class mainController {

    constructor(todoService) {
        this.todoService = todoService;
        this.load();
        $(document).ready(function() {
            $('select').material_select();
        });
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
    getHU(origin, dest) {
        console.log(origin, dest);
        $.get("https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + origin + "&destinations=" + dest + "&mode=driving&language=fr-FR", (res) => {
            console.log(res);
            var reponse = {};
            reponse.distanceText = res.rows[0].elements[0].distance.text;
            reponse.distanceValue = res.rows[0].elements[0].distance.value;
            alert(reponse.distanceText);
        });
    }

}
