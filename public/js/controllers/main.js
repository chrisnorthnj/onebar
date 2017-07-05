angular.module('todoController', [])

    // inject the Todo service factory into our controller
    .controller('mainController', ['$scope', '$http', 'Todos', function ($scope, $http, Todos) {
        $scope.formData = {};
        $scope.loading = true;

        // GET =====================================================================
        // when landing on the page, get all todos and show them
        // use the service to get all the todos
        Todos.get()
            .success(function (data) {
                $scope.todos = data;
                $scope.loading = false;
            });

        // CREATE ==================================================================
        // when submitting the add form, send the text to the node API
        $scope.createTodo = function () {

            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            if ($scope.formData.text != undefined) {
                $scope.loading = true;

                // call the create function from our service (returns a promise object)
                Todos.create($scope.formData)

                    // if successful creation, call our get function to get all the new todos
                    .success(function (data) {
                        $scope.loading = false;
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.todos = data; // assign our new list of todos
                    });
            }
        };

        // DELETE ==================================================================
        // delete a todo after checking it
        $scope.deleteTodo = function (id) {
            $scope.loading = true;

            Todos.delete(id)
                // if successful creation, call our get function to get all the new todos
                .success(function (data) {
                    $scope.loading = false;
                    $scope.todos = data; // assign our new list of todos
                });
        };

        // TAGS Input Section ======================================================
        // Hope this finally works
        /* $scope.tags = [
        ];

        $scope.loadTags = function (query) {
            return $http.get('tags.json');
        }; */
        $scope.options = ["Text", "Markdown", "HTML", "PHP", "Python", "Java", "JavaScript", "Ruby", "VHDL", "Verilog", "C#", "C/C++"];
        $scope.tags = ["Markdown", "Ruby"];

        $scope.font = null;
        $scope.fonts = [
            { id: 1, name: "Lucida" },
            { id: 2, name: "DejaVu" },
            { id: 3, name: "Bitstream" },
            { id: 4, name: "Liberation" },
            { id: 5, name: "Verdana" }
        ];

        $scope.font2 = $scope.fonts[1];

        $scope.showName = function (font) { return font.name; };
        $scope.createName = function (name) { return { name: name } };

        $scope.empty = {
            value: [],
            options: [],
            addOption: function () {
                $scope.empty.options.push(Math.random())
            }
        };

        $scope.selected = function (item) {
            console.log("SELECTED ", item)
        };

        $scope.foc = function () {
            document.getElementById("s1").focus()
        };
    });
	// }]);