//
//  RNZendeskBridge.m
//  RNZendesk
//
//  Created by Tim Claes on 22.05.23.
//  Copyright © 2023 Tim Claes. All rights reserved.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_REMAP_MODULE(RNZendeskSupport, RNZendeskSupport, NSObject)

// MARK: - Initialization

RCT_EXTERN_METHOD(initialize:(NSDictionary *)config);

// MARK: - Indentification

RCT_EXTERN_METHOD(identifyJWT:(NSString *)token);
RCT_EXTERN_METHOD(identifyAnonymous:(NSString *)name email:(NSString *)email);

// MARK: - UI Methods

RCT_EXTERN_METHOD(showHelpCenter:(NSDictionary *)options);
RCT_EXTERN_METHOD(showNewTicket:(NSDictionary *)options);
RCT_EXTERN_METHOD(showTicketList);

@end
