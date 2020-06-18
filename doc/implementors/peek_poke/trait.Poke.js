(function() {var implementors = {};
implementors["peek_poke"] = [];
implementors["wgpu_core"] = [{"text":"impl <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a> for <a class=\"enum\" href=\"wgpu_core/command/enum.ComputeCommand.html\" title=\"enum wgpu_core::command::ComputeCommand\">ComputeCommand</a>","synthetic":false,"types":["wgpu_core::command::compute::ComputeCommand"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a> for <a class=\"struct\" href=\"wgpu_core/command/struct.Rect.html\" title=\"struct wgpu_core::command::Rect\">Rect</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a>,&nbsp;</span>","synthetic":false,"types":["wgpu_core::command::render::Rect"]},{"text":"impl <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a> for <a class=\"enum\" href=\"wgpu_core/command/enum.RenderCommand.html\" title=\"enum wgpu_core::command::RenderCommand\">RenderCommand</a>","synthetic":false,"types":["wgpu_core::command::render::RenderCommand"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a> for <a class=\"struct\" href=\"wgpu_core/command/struct.PhantomSlice.html\" title=\"struct wgpu_core::command::PhantomSlice\">PhantomSlice</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a>,&nbsp;</span>","synthetic":false,"types":["wgpu_core::command::PhantomSlice"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a> for <a class=\"struct\" href=\"wgpu_core/id/struct.Id.html\" title=\"struct wgpu_core::id::Id\">Id</a>&lt;T&gt;","synthetic":false,"types":["wgpu_core::id::Id"]}];
implementors["wgpu_types"] = [{"text":"impl <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a> for <a class=\"struct\" href=\"wgpu_types/struct.BufferSize.html\" title=\"struct wgpu_types::BufferSize\">BufferSize</a>","synthetic":false,"types":["wgpu_types::BufferSize"]},{"text":"impl <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a> for <a class=\"enum\" href=\"wgpu_types/enum.LoadOp.html\" title=\"enum wgpu_types::LoadOp\">LoadOp</a>","synthetic":false,"types":["wgpu_types::LoadOp"]},{"text":"impl <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a> for <a class=\"enum\" href=\"wgpu_types/enum.StoreOp.html\" title=\"enum wgpu_types::StoreOp\">StoreOp</a>","synthetic":false,"types":["wgpu_types::StoreOp"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a> for <a class=\"struct\" href=\"wgpu_types/struct.RenderPassColorAttachmentDescriptorBase.html\" title=\"struct wgpu_types::RenderPassColorAttachmentDescriptorBase\">RenderPassColorAttachmentDescriptorBase</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;: <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a>,&nbsp;</span>","synthetic":false,"types":["wgpu_types::RenderPassColorAttachmentDescriptorBase"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a> for <a class=\"struct\" href=\"wgpu_types/struct.RenderPassDepthStencilAttachmentDescriptorBase.html\" title=\"struct wgpu_types::RenderPassDepthStencilAttachmentDescriptorBase\">RenderPassDepthStencilAttachmentDescriptorBase</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a>,&nbsp;</span>","synthetic":false,"types":["wgpu_types::RenderPassDepthStencilAttachmentDescriptorBase"]},{"text":"impl <a class=\"trait\" href=\"peek_poke/trait.Poke.html\" title=\"trait peek_poke::Poke\">Poke</a> for <a class=\"struct\" href=\"wgpu_types/struct.Color.html\" title=\"struct wgpu_types::Color\">Color</a>","synthetic":false,"types":["wgpu_types::Color"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()