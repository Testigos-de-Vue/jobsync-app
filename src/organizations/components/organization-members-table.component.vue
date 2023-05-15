<template>
    <pv-data-table 
    :value="members" 
    tableStyle="min-width: 50rem"
    paginator :rows="5" :rowsPerPageOptions="[5, 10, 20]">
        <template #header>
            <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                <span class="text-xl text-900 font-bold">{{ $t('organization-profile.members-table.members-title') }}</span>
            </div>
        </template>
        <pv-column
            field="memberId"
            header="Id" />
        <pv-column :header="$t('organization-profile.members-table.name-header')">
            <template #body="member">
                <div class="flex items-center gap-2">
                    <img alt="Member Profile Picture" 
                        :src="getUserProfileImageUrl(member.data.memberId)"
                        class="w-12 h-12 rounded-full object-cover" />
                    <span>
                        {{ getUserName(member.data.memberId) }}
                    </span>
                </div>
            </template>
        </pv-column>
        <pv-column :header="$t('organization-profile.members-table.phone-header')">
            <template #body="member">
                <div class="flex items-center gap-2">
                    <span>
                        {{ getUserPhoneNumber(member.data.memberId) }}
                    </span>
                </div>
            </template>
        </pv-column>
        <pv-column :header="$t('organization-profile.members-table.phone-header')">
            <template #body="member">
                <div class="flex items-center gap-2">
                    <span>
                        {{ getUserEmail(member.data.memberId) }}
                    </span>
                </div>
            </template>
        </pv-column>
        <pv-column :header="$t('organization-profile.members-table.role-header')">
            <template #body="member">
                <div class="flex items-center gap-2">
                    <span>{{ member.data.role }}</span>
                    <pv-button icon="pi pi-pencil" severity="help" text rounded aria-label="Edit" />
                </div>
            </template>
        </pv-column>
    </pv-data-table>
</template>

<script>
export default {
    name: "members-table",
    props: {
        members: {
            type: Array,
            required: true
        },
        users : {
            type: Array,
            required: true
        }
    },
    methods: {
        getUserName(memberId){
            const user = this.users.find(user => user.id === memberId);
            return user ? user.name : '-';
        },
        getUserPhoneNumber(memberId){
            const user = this.users.find(user => user.id === memberId);
            return user ? user.phoneNumber : '-';
        },
        getUserEmail(memberId){
            const user = this.users.find(user => user.id === memberId);
            return user ? user.email : '-';
        },
        getUserProfileImageUrl(memberId){
            const user = this.users.find(user => user.id === memberId);
            return user ? user.profileImageUrl : '#';
        },
    }
}
</script>

<style>
</style>