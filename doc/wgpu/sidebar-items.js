initSidebarItems({"constant":[["BIND_BUFFER_ALIGNMENT","Bound uniform/storage buffer offsets must be aligned to this number."],["COPY_BUFFER_ALIGNMENT","Buffer to buffer copy offsets and sizes must be aligned to this number"],["COPY_BYTES_PER_ROW_ALIGNMENT","Buffer-Texture copies on command encoders have to have the `bytes_per_row` aligned to this number."]],"enum":[["AddressMode",""],["Backend",""],["BindingResource","Resource that can be bound to a pipeline."],["BindingType","Specific type of a binding. WebGPU spec: https://gpuweb.github.io/gpuweb/#dictdef-gpubindgrouplayoutentry"],["BlendFactor",""],["BlendOperation",""],["CompareFunction",""],["CullMode",""],["DeviceType","Supported physical device types"],["FilterMode",""],["FrontFace",""],["IndexFormat",""],["InputStepMode",""],["LoadOp",""],["Maintain","Passed to [`Device::poll`] to control if it should block or not. This has no effect on the web."],["MapMode","Type of buffer mapping."],["PowerPreference",""],["PresentMode",""],["PrimitiveTopology",""],["ShaderModuleSource","Source of a shader module."],["StencilOperation",""],["StoreOp",""],["SwapChainError","Result of an unsuccessful call to [`SwapChain::get_next_frame`]."],["SwapChainStatus",""],["TextureAspect",""],["TextureComponentType",""],["TextureDimension",""],["TextureFormat",""],["TextureViewDimension",""],["VertexFormat",""]],"macro":[["include_spirv","Macro to load a SPIR-V module statically."],["vertex_attr_array","Macro to produce an array of [`VertexAttributeDescriptor`]."],["vertex_format_size","Helper macro which turns a vertex attribute type into a size."]],"mod":[["util",""]],"struct":[["Adapter","Handle to a physical graphics and/or compute device."],["AdapterInfo","Metadata about a backend adapter."],["BackendBit",""],["BindGroup","Handle to a binding group."],["BindGroupDescriptor","Describes a group of bindings and the resources to be bound."],["BindGroupLayout","Handle to a binding group layout."],["BindGroupLayoutDescriptor","A description of a bind group layout."],["BindGroupLayoutEntry","A description of a single binding inside a bind group."],["Binding","Bindable resource and the slot to bind it to."],["BlendDescriptor",""],["Buffer","Handle to a GPU-accessible buffer."],["BufferAsyncError","Error occurred when trying to async map a number."],["BufferCopyView","View of a buffer which can be used to copy to/from a texture."],["BufferDescriptorBase",""],["BufferSize",""],["BufferSlice","Slice into a [`Buffer`]."],["BufferUsage",""],["BufferView","Read only view into a mapped buffer."],["BufferViewMut","Write only view into mapped buffer."],["Capabilities",""],["Color",""],["ColorStateDescriptor",""],["ColorWrite",""],["CommandBuffer","Handle to a command buffer on the GPU."],["CommandBufferDescriptor",""],["CommandEncoder","Encodes a series of GPU operations."],["CommandEncoderDescriptorBase",""],["ComputePass","In-progress recording of a compute pass."],["ComputePipeline","Handle to a compute pipeline."],["ComputePipelineDescriptor","Describes a compute pipeline."],["DepthStencilStateDescriptor",""],["Device","Open connection to a graphics and/or compute device."],["DeviceDescriptor",""],["Extensions",""],["Extent3d",""],["Instance","Instance of wgpu. First thing you create when using wgpu."],["Limits",""],["Origin3d",""],["PipelineLayout","Handle to a pipeline layout."],["PipelineLayoutDescriptor","Describes a pipeline layout."],["ProgrammableStageDescriptor","Describes a programmable pipeline stage."],["Queue","Handle to a command queue on a device."],["RasterizationStateDescriptor",""],["RenderBundle","Pre-prepared reusable bundle of GPU operations."],["RenderBundleDescriptorBase",""],["RenderBundleEncoder","Encodes a series of GPU operations into a reusable \"render bundle\"."],["RenderBundleEncoderDescriptor",""],["RenderPass","In-progress recording of a render pass."],["RenderPassColorAttachmentDescriptorBase",""],["RenderPassDepthStencilAttachmentDescriptorBase",""],["RenderPassDescriptor","Describes the attachments of a [`RenderPass`]."],["RenderPipeline","Handle to a rendering (graphics) pipeline."],["RenderPipelineDescriptor","Describes a render (graphics) pipeline."],["RequestAdapterOptions","Options for requesting adapter."],["RequestDeviceError","Requesting a device failed."],["Sampler","Handle to a sampler."],["SamplerDescriptorBase",""],["ShaderModule","Handle to a compiled shader module."],["ShaderStage",""],["StencilStateFaceDescriptor",""],["Surface","Handle to a presentable surface."],["SwapChain","Handle to a swap chain."],["SwapChainDescriptor",""],["SwapChainFrame","Result of a successful call to [`SwapChain::get_next_frame`]."],["SwapChainTexture","Swap chain image that can be rendered to."],["Texture","Handle to a texture on the GPU."],["TextureCopyView","View of a texture which can be used to copy to/from a buffer/texture."],["TextureDataLayout",""],["TextureDescriptorBase",""],["TextureUsage",""],["TextureView","Handle to a texture view."],["TextureViewDescriptorBase",""],["UnsafeExtensions",""],["VertexAttributeDescriptor",""],["VertexBufferDescriptor","Describes how the vertex buffer is interpreted."],["VertexStateDescriptor","Describes vertex input state for a render pipeline."]],"type":[["BufferAddress",""],["BufferDescriptor","Describes a [`Buffer`]."],["CommandEncoderDescriptor","Describes a [`CommandEncoder`]."],["DynamicOffset",""],["NonZeroBufferAddress",""],["RenderBundleDescriptor","Describes a [`RenderBundle`]."],["RenderPassColorAttachmentDescriptor","Describes a color attachment to a [`RenderPass`]."],["RenderPassDepthStencilAttachmentDescriptor","Describes a depth/stencil attachment to a [`RenderPass`]."],["SamplerDescriptor","Describes a [`Sampler`]."],["ShaderLocation",""],["TextureDescriptor","Describes a [`Texture`]."],["TextureViewDescriptor","Describes a [`TextureView`]."]]});