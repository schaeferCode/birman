<template>
  <form class="px-8 pt-6 pb-8 w-full">
    <label class="block mb-4 text-gray-700 text-sm font-bold">
      <p class="mb-2">This is forgot passwrod</p>
      <input
        class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Username"
        type="text"
      />
    </label>
    <label class="block mb-4 text-gray-700 text-sm font-bold">
      <p class="mb-2">Password</p>
      <input
        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Password"
        type="password"
      />
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </label>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Sign In
      </button>
      <router-link
        to="/login/forgot-password"
        class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
      >
        Forgot Password?
      </router-link>
    </div>
  </form>
</template>
