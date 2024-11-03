<script lang="ts">

</script>

<div class="container">
  <!--  This is the place for windows container, it would make rounded app edges, load
        styles, handle routes (from there to login )-->

  <h1>Testing panel</h1>

  <div class="auth">
    <h3>Authorization module</h3>
    <a href="auth" class="module-main-link">Main</a>
    <br/>
    <ul>
      <li><a href="auth/register">Register page</a></li>
      <li><a href="auth/login">Login page</a></li>
    </ul>
    
    <br/>
  </div>
</div>

<style>
.module-main-link {
  font-size: 22px;
}

:global(html) {
        color: #dddddd;
        background-color: #303030;
    }
</style>