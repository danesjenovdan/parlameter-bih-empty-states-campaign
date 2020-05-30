<template>
    <div class="signee mb32">
        <div class="flex flex-justify--center flex-align--center">
            <div class="mb64 mt64 flex flex--column flex-align--center flex-justify--center">
                <span class="title-custom">Potpisnice i potpisnici</span>
            </div>
        </div>
        <span class="subsubtitle" v-for="(signee, index) in signees">
            <span>{{signee}}</span><span v-if="index+1 < signees.length">, </span>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Signees",
        data() {
            return {
                signees: ['John Doe', 'Johnina Doe', 'John Doeo', 'Johan Doe', 'Jo Do']
            }
        }
    }
</script>

<style scoped lang="scss">
@import "@/assets/style/variables";

.title-custom {
  font-size: 30px;
  font-weight: 300;
}

.signee{
    text-align: center;
}
</style>