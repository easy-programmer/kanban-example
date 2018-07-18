<template>
    <div class="card-body">
        <draggable v-model="draggables" :options="{group : 'default' }">
            <div v-for="item in items" :key="item.id">
                <item :item="item"></item>
            </div>
        </draggable>
    </div>
</template>