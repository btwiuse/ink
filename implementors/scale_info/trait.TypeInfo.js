(function() {var implementors = {};
implementors["ink_env"] = [{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"enum\" href=\"ink_env/enum.DefaultEnvironment.html\" title=\"enum ink_env::DefaultEnvironment\">DefaultEnvironment</a>","synthetic":false,"types":["ink_env::types::DefaultEnvironment"]},{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_env/struct.AccountId.html\" title=\"struct ink_env::AccountId\">AccountId</a>","synthetic":false,"types":["ink_env::types::AccountId"]},{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_env/struct.Hash.html\" title=\"struct ink_env::Hash\">Hash</a>","synthetic":false,"types":["ink_env::types::Hash"]}];
implementors["ink_primitives"] = [{"text":"impl TypeInfo for <a class=\"struct\" href=\"ink_primitives/struct.Key.html\" title=\"struct ink_primitives::Key\">Key</a>","synthetic":false,"types":["ink_primitives::key::Key"]}];
implementors["ink_storage"] = [{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_storage/alloc/struct.DynamicAllocation.html\" title=\"struct ink_storage::alloc::DynamicAllocation\">DynamicAllocation</a>","synthetic":false,"types":["ink_storage::alloc::allocation::DynamicAllocation"]},{"text":"impl&lt;K, V&gt; <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_storage/struct.Mapping.html\" title=\"struct ink_storage::Mapping\">Mapping</a>&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.fn.html\">fn</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>K, V<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt;: <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ink_storage::lazy::mapping::Mapping"]}];
implementors["scale_info"] = [];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()