<template>
    <div class="portlet-body">
        <div class="tab-content">
            <div class="portlet-body">
                <table id="table-transform" data-toolbar="#transform-buttons" data-height="299">
                    <thead>
                        <tr>
                            <th >Name</th>
                            <th >Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Albert</td>
                            <td>Uganda</td>
                        </tr>
                        <tr>
                            <td>Jovan</td>
                            <td>Tanzania</td>
                        </tr>
                        <tr>
                            <td>Mbabazi</td>
                            <td>Kenya</td>
                        </tr>
                        <tr>
                            <td>Joshua</td>
                            <td>Rwanda</td>
                        </tr>
                        <tr>
                            <td>Conrad</td>
                            <td>Burundi</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data: () => ({
        
        }),
        mounted() {
            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
            document.head.appendChild(recaptchaScript)
        },
        methods: {
    
        }
    }
</script>