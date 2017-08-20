export class Init
{
    load()
    {
        if(localStorage.getItem('todos')==null || localStorage.getItem('todos')==undefined)
            {
                console.log('No tasks! Creating our own...')
                var todos = [
                    {
                        text: 'Learn Angular4'
                    },
                    {
                        text: 'Create Todo App',
            
                    },
                    {
                        text: 'Feed the cat'
                    },
                    {
                        text: 'Save the world'
                    }
                ];

                localStorage.setItem('todos', JSON.stringify(todos));
                return 
            }
            else
            {
                console.log('Found todos!');
            }
    }
}