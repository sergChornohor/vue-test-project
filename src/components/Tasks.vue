<template>
    <div class="content-container-data-posts">
        <div class="tasks-list">
            <ul>
                <li v-for="tasks in tasks" :key="tasks.title">
                    <span>{{tasks.title}}</span>
                    <span>{{tasks.description}}</span>
                    <span>{{tasks.exTime}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tasksContainer',

    data() {
        return{
        tasks: [
            {title: 'toDo1', description: 'what I must to do', exTime: '12:30 PM'},
            {title: 'toDo2', description: 'what I must to do', exTime: '12:30 PM'},
            {title: 'toDo3', description: 'what I must to do', exTime: '12:30 PM'},
            {title: 'toDo4', description: 'what I must to do', exTime: '12:30 PM'}
        ]}
    }
}
</script>

<style scoped>
    .tasks-list{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        padding: 20px;
    }
    li{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    span{
        font-size: 18px;
        padding: 15px;
    }
</style>