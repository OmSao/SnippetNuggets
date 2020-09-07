-JavaScript is always Synchrounous and single-threaded. However, during AJAX or network call JavaScript is non-blocking i.e. JS single thread doesn't wait for response. Remember again, Plain JavaScript doesn't support multi-threading. With NodeJS multithreading is possible, but again NodeJS is not plain JavaScript.

-In Single threaded execution both Async and Sync have same behaviour.
-Asynchronous vs Synchronous Execution:

    --Asynchronous execution: Parallel handling of events. Process doesn't wait for an event to finish before starting for next job in queue.
    f1(); //1sec
    f2NetworkCall(); //3sec network transmission
    f3(); //2sec

    --Synchronous execution: Sequential handling of events. Process wait for an event to finish before starting for next job in queue.
    f1(); //1sec
    f2NetworkCall(); //3sec network transmission
    f3(); //2sec

-Asynchronous execution is dangerous if an event takes long time to return value while next events depends on it's value.

-Synchronous execution is dangerous when an event takes longer duration as next events will have to wait for it to finish, eventhough their executions are independent of the task whose completion they are waiting for.

-Best approach would be to have our control to execute any block after execution of certain function/event.

-In JavaScript during AJAX or Fetch calls, when network + server transmission is taking place, Process execution continues with the next steps instead of waiting for result of network calls.

-Callbacks are mainly to address the Asynchronous behaviour of JavaScript during network calls so that a callback function will be invoked after completion of some task.

-Since ES6(2015), Promises came into picture and provided much better solution to address the same.
And finally with ES7(2017) Async Await came which provided much better way of handling than promises with it's .then(..) syntax.

-ECMAScript - Further ES8(2018) and ES9(2019)

-Callback function is often accepted as second parameter get executed when parent function execution finishes.
