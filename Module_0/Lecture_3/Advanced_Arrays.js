let arr = [ 1, true, 1.5, [1,5,643,90],
        fun1,
        function fn(){
            console.log("THE $#!V");
            return '';
        }
    ];

    // console.log(arr[arr.length - 1]());
    // console.log(arr[arr.length - 2][2]);

    // console.log(Array.isArray(arr));
    // console.log(typeof arr[arr.length - 1]);
    function fun1(){
        console.log(arr[arr.length -1]());
        console.log("Why always hell-o");
        return "";
    }

    console.log(fun1());